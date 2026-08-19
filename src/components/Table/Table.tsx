import {
  forwardRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type {
  CSSProperties,
  PointerEvent,
} from "react";
import * as sx from "@stylexjs/stylex";
import { TableSizeContext } from "./TableContext";
import { styles } from "./Table.styles";
import type {
  TableCellAlign,
  TableCellContentProps,
  TableCellProps,
  TableHeaderCellProps,
  TableProps,
} from "./Table.types";

const TableCellContent = ({
  children,
  align,
  wrap = true,
  clamp,
  ellipsis = false,
}: TableCellContentProps) => {
  const needsContentWrapper =
    align !== undefined || !wrap || clamp !== undefined || ellipsis;
  if (!needsContentWrapper) return children;

  const alignmentStyle =
    align === "start"
      ? styles.contentAlignStart
      : align === "center"
        ? styles.contentAlignCenter
        : align === "end"
          ? styles.contentAlignEnd
          : undefined;
  const styleProps = sx.props(
    styles.cellContent,
    align !== undefined && styles.cellContentFlex,
    alignmentStyle,
    !wrap && styles.noWrap,
    ellipsis && styles.ellipsis,
    clamp !== undefined && styles.clamp,
  );

  return (
    <div
      {...styleProps}
      data-table-cell-content-align={align}
      data-table-cell-content-clamp={clamp}
      data-table-cell-content-ellipsis={ellipsis ? "" : undefined}
      data-table-cell-content-wrap={wrap ? "wrap" : "nowrap"}
      style={{ ...styleProps.style, WebkitLineClamp: clamp }}
    >
      {children}
    </div>
  );
};

const useCellStyles = (
  align: TableCellAlign | undefined,
  dataCell: boolean,
) => {
  const context = useContext(TableSizeContext) ?? {
    size: "m" as const,
    variant: "rows" as const,
  };
  const sizeStyle = {
    s: styles.cellSizeS,
    m: styles.cellSizeM,
    l: styles.cellSizeL,
  }[context.size];
  const rowEdgeStyle = {
    s: styles.rowsCellSizeS,
    m: styles.rowsCellSizeM,
    l: styles.rowsCellSizeL,
  }[context.size];
  const alignStyle = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
  };
  return sx.props(
    styles.cell,
    dataCell && styles.dataCell,
    !dataCell && styles.headerCell,
    sizeStyle,
    context.variant === "rows" ? styles.rowsCell : styles.gridCell,
    dataCell &&
      context.variant === "rows" &&
      context.usage === "card" &&
      styles.cardRowsCell,
    context.variant === "rows" && rowEdgeStyle,
    align && alignStyle[align],
  );
};

/** A native table header cell with optional logical content alignment. */
const TableHeaderCell = ({
  align,
  wrap,
  clamp,
  ellipsis,
  onAction,
  actionLabel,
  children,
  className,
  style,
  scope = "col",
  ...props
}: TableHeaderCellProps) => {
  const styleProps = useCellStyles(align, false);
  const actionStyleProps = sx.props(
    styles.headerAction,
    align === "center"
      ? styles.headerActionCenter
      : align === "end"
        ? styles.headerActionEnd
        : styles.headerActionStart,
  );
  const content = onAction ? (
    <button
      {...actionStyleProps}
      type="button"
      aria-label={actionLabel}
      data-table-header-action=""
      onClick={onAction}
    >
      {children}
    </button>
  ) : (
    children
  );
  return (
    <th
      {...styleProps}
      className={[styleProps.className, className].filter(Boolean).join(" ")}
      data-table-cell-align={align}
      scope={scope}
      style={{ ...styleProps.style, ...style }}
      {...props}
    >
      <TableCellContent
        align={align}
        wrap={wrap}
        clamp={clamp}
        ellipsis={ellipsis}
      >
        {content}
      </TableCellContent>
    </th>
  );
};

/** A native table data cell with optional logical content alignment. */
const TableCell = ({
  align,
  wrap,
  clamp,
  ellipsis,
  children,
  className,
  style,
  ...props
}: TableCellProps) => {
  const styleProps = useCellStyles(align, true);
  return (
    <td
      {...styleProps}
      className={[styleProps.className, className].filter(Boolean).join(" ")}
      data-table-cell-align={align}
      style={{ ...styleProps.style, ...style }}
      {...props}
    >
      <TableCellContent
        align={align}
        wrap={wrap}
        clamp={clamp}
        ellipsis={ellipsis}
      >
        {children}
      </TableCellContent>
    </td>
  );
};

/** A semantic native table with consistent row or cell-grid styling. */
const TableRoot = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      variant = "rows",
      size = "m",
      layout = "auto",
      minWidth,
      columns,
      overflow = "visible",
      overflowLabel,
      usage,
      className,
      children,
      style,
      onPointerOver,
      onPointerLeave,
      ...props
    },
    ref,
  ) => {
    const isScrollable = overflow === "auto" || overflow === "scroll";
    const tableRef = useRef<HTMLTableElement | null>(null);
    const activeRowRef = useRef<HTMLTableRowElement | null>(null);
    const [highlight, setHighlight] = useState({
      animate: false,
      bodyTop: 0,
      top: 0,
      height: 0,
      width: 0,
      visible: false,
    });
    const [mixedRatioWidths, setMixedRatioWidths] = useState<
      Record<number, number>
    >({});
    const columnRefs = useRef<Array<HTMLTableColElement | null>>([]);

    const setTableRef = (node: HTMLTableElement | null) => {
      tableRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    const updateHighlight = (row: HTMLTableRowElement, animate = false) => {
      const table = tableRef.current;
      const container = table?.parentElement;
      const body = row.closest("tbody");
      /* v8 ignore next -- Called only from mounted table-row pointer and resize events. */
      if (!table || !container || !body) return;

      const rowRect = row.getBoundingClientRect();
      const bodyRect = body.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setHighlight({
        animate,
        bodyTop: Math.round(
          bodyRect.top - containerRect.top + container.scrollTop,
        ),
        top: Math.round(rowRect.top - bodyRect.top),
        height: Math.round(rowRect.height),
        width: Math.round(table.getBoundingClientRect().width),
        visible: true,
      });
    };

    useEffect(() => {
      const table = tableRef.current;
      const container = table?.parentElement;
      /* v8 ignore next -- The effect runs only after this component's table and container mount. */
      if (!table || !container) return;

      const observer = new ResizeObserver(() => {
        if (activeRowRef.current) updateHighlight(activeRowRef.current);
      });

      observer.observe(table);
      observer.observe(container);
      return () => observer.disconnect();
    }, []);

    const handlePointerOver = (event: PointerEvent<HTMLTableElement>) => {
      onPointerOver?.(event);
      if (variant !== "rows") return;
      /* v8 ignore next -- React DOM pointer-event targets are Elements for this table handler. */
      if (!(event.target instanceof Element)) return;

      const row = event.target.closest("tbody tr");
      if (!(row instanceof HTMLTableRowElement)) return;
      if (activeRowRef.current === row) return;

      const animate = activeRowRef.current !== null;
      activeRowRef.current = row;
      updateHighlight(row, animate);
    };

    const handlePointerLeave = (event: PointerEvent<HTMLTableElement>) => {
      onPointerLeave?.(event);
      activeRowRef.current = null;
      setHighlight((current) => ({
        ...current,
        animate: false,
        visible: false,
      }));
    };

    const containerStyleProps = sx.props(
      styles.container,
      {
        auto: styles.overflowAuto,
        scroll: styles.overflowScroll,
        hidden: styles.overflowHidden,
        visible: styles.overflowVisible,
      }[overflow],
    );
    const tableStyleProps = sx.props(
      styles.table,
      { s: styles.tableSizeS, m: styles.tableSizeM, l: styles.tableSizeL }[
        size
      ],
      variant === "grid" && styles.gridTable,
    );
    const totalRatio =
      columns?.reduce((total, column) => total + (column.ratio ?? 0), 0) ?? 0;
    const hasFixedWidths =
      columns?.some((column) => column.width !== undefined) ?? false;
    const hasRatios = totalRatio > 0;
    const hasMixedColumns = hasFixedWidths && hasRatios;

    useLayoutEffect(() => {
      const table = tableRef.current;
      const container = table?.parentElement;
      if (!table || !container || !columns || !hasMixedColumns) {
        setMixedRatioWidths({});
        return;
      }

      const updateMixedRatioWidths = () => {
        const fixedWidth = columns.reduce(
          (total, column, index) =>
            column.width === undefined
              ? total
              : total +
                (columnRefs.current[index]?.getBoundingClientRect().width ?? 0),
          0,
        );
        const remainingWidth = Math.max(
          0,
          container.getBoundingClientRect().width - fixedWidth,
        );
        const nextWidths = Object.fromEntries(
          columns.flatMap((column, index) =>
            column.ratio === undefined
              ? []
              : [
                  [
                    index,
                    Math.round(
                      ((remainingWidth * column.ratio) / totalRatio) * 1000,
                    ) / 1000,
                  ],
                ],
          ),
        );

        setMixedRatioWidths((current) => {
          const unchanged =
            Object.entries(nextWidths).every(
              ([index, width]) => current[Number(index)] === width,
            ) && Object.keys(current).length === Object.keys(nextWidths).length;
          return unchanged ? current : nextWidths;
        });
      };

      updateMixedRatioWidths();
      const observer = new ResizeObserver(updateMixedRatioWidths);
      observer.observe(container);
      return () => observer.disconnect();
    }, [columns, hasMixedColumns, totalRatio]);

    return (
      <TableSizeContext.Provider value={{ size, variant, usage }}>
        <div
          {...containerStyleProps}
          className={[containerStyleProps.className, className]
            .filter(Boolean)
            .join(" ")}
          data-overflow={overflow}
          role={isScrollable && overflowLabel ? "region" : undefined}
          aria-label={isScrollable ? overflowLabel : undefined}
          tabIndex={isScrollable ? 0 : undefined}
        >
          {variant === "rows" && (
            <span
              aria-hidden="true"
              {...sx.props(
                styles.rowHighlightClip,
                highlight.visible && styles.rowHighlightVisible,
              )}
              data-table-row-highlight=""
              data-animate={highlight.animate ? "true" : "false"}
              data-visible={highlight.visible ? "true" : "false"}
              style={{ top: `${highlight.bodyTop}px` }}
            >
              <span
                {...sx.props(
                  styles.rowHighlight,
                  highlight.animate && styles.rowHighlightAnimated,
                )}
                style={
                  {
                    height: `${highlight.height}px`,
                    width: `${highlight.width}px`,
                    transform: `translate3d(0, ${highlight.top}px, 0)`,
                  } as CSSProperties
                }
              />
            </span>
          )}
          <table
            ref={setTableRef}
            {...tableStyleProps}
            data-table-usage={usage}
            data-table-variant={variant}
            data-table-size={size}
            style={{
              ...tableStyleProps.style,
              ...style,
              tableLayout: layout,
              minWidth,
            }}
            onPointerOver={handlePointerOver}
            onPointerLeave={handlePointerLeave}
            {...props}
          >
            {columns && (
              <colgroup>
                {columns.map((column, index) => {
                  const width =
                    column.ratio === undefined
                      ? column.width
                      : hasMixedColumns
                        ? mixedRatioWidths[index] === undefined
                          ? undefined
                          : `${mixedRatioWidths[index]}px`
                        : `${(column.ratio / totalRatio) * 100}%`;

                  return (
                    <col
                      key={index}
                      ref={(node) => {
                        columnRefs.current[index] = node;
                      }}
                      style={{ width }}
                    />
                  );
                })}
              </colgroup>
            )}
            {children}
          </table>
        </div>
      </TableSizeContext.Provider>
    );
  },
);

TableRoot.displayName = "Table";

export const Table = Object.assign(TableRoot, {
  HeaderCell: TableHeaderCell,
  Cell: TableCell,
});
