import { createContext } from "react";
import type { TableContextValue } from "./Table.types";

export const TableSizeContext = createContext<TableContextValue | null>(null);
