"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children?: ReactNode }) {
  return <ThemeProvider>{children ? children : null}</ThemeProvider>;
}

export default Layout;
