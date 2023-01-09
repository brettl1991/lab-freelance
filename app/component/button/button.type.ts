import type { ReactNode } from "react";

export type Button = {
  children?: ReactNode;
  kind?: "primary" | "secondary" | "warning" | "info" | "success" | "danger";
};
