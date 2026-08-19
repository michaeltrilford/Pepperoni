export type ApiControl = "select" | "radio" | "boolean" | "text" | "number" | false;

export interface ComponentPropApi {
  type: string;
  description: string;
  required?: boolean;
  defaultValue?: string | number | boolean;
  values?: readonly (string | number)[];
  control?: ApiControl;
}

export interface ComponentApi<PropName extends string = string> {
  name: string;
  element: string;
  inherits?: string;
  props: Partial<Record<PropName, ComponentPropApi>>;
}

/** Converts canonical component API metadata into Storybook controls. */
export function apiToArgTypes(api: ComponentApi): Record<string, Record<string, unknown>> {
  return Object.fromEntries(
    Object.entries(api.props)
      .filter((entry): entry is [string, ComponentPropApi] => entry[1] !== undefined)
      .map(([name, prop]) => {
      const control = prop.control === false
        ? { disable: true }
        : prop.control
          ? { type: prop.control }
          : undefined;

        return [name, {
          description: prop.description,
          control,
          options: prop.values,
          table: {
            type: { summary: prop.type },
            defaultValue: prop.defaultValue === undefined
              ? undefined
              : { summary: String(prop.defaultValue) }
          }
        }];
      })
  );
}
