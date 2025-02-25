"use client";
import "./styles/globals.css";
import { NavBar } from "@/components";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const path = usePathname();
  console.log(path)
  return (
    <html lang="es">
      <body>
        {
          path === '/' ?
          null
          :
          <NavBar background />
        }
        {children}
      </body>
    </html>
  );
}
