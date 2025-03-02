"use client";
import "./styles/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavBar, Loader, Footer } from "@/components";
import { ShoppingCartProvider, UserProvider } from "@/contexts";

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
    <ShoppingCartProvider>
      <UserProvider>
        <html lang="es">
          <body>
            {!loading ? (
              <>
                {path === "/" ? null : <NavBar background />}
                {children}
                <Footer />
              </>
            ) : (
              <Loader fullScreen />
            )}
          </body>
        </html>
      </UserProvider>
    </ShoppingCartProvider>
  );
}
