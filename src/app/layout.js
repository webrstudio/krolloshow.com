"use client";
import "./styles/globals.css";
import { useState, useEffect } from "react";
import { NavBar, Loader } from "@/components";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const path = usePathname();

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <html lang="es">
      <body>
        {!loading ? (
          <>
            {path === "/" ? null : <NavBar background />}
            {children}
          </>
        ) : (
          <Loader />
        )}
      </body>
    </html>
  );
}
