import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "components";
import Loading from "./loading";
import "styles/globals.css";
import { ThemeContext } from "context";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-FFTHTY565T" />
      <body>
        <ThemeContext>
          <AppHeader />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <AppFooter />
        </ThemeContext>
      </body>
    </html>
  );
}
