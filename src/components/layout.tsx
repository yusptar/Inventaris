"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: NonNullable<ReactNode> }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
