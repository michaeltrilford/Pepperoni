import { createContext } from "react";
import type { ListSize } from "./List.types";

export interface ListContextValue {
  size: ListSize;
}

export const ListContext = createContext<ListContextValue>({ size: "m" });
