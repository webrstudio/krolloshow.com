"use client";
import "./styles/globals.css";
import { NavBar } from "@/components";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const router = usePathname();
  return (
    <html lang="es">
      <body>
        <NavBar background />
        {children}
      </body>
    </html>
  );
}
