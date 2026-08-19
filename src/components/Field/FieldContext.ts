import { createContext } from "react";
import type { FieldContextValue } from "./Field.types";

export const FieldContext = createContext<FieldContextValue | null>(null);
