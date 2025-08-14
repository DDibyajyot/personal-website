import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata, viewport as appViewport } from "components";
import Loading from "./loading";
import "styles/globals.css";
import { ThemeContext } from "context";

export const metadata = { ...AppMetadata };
export const viewport = { ...appViewport };

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Deepam Dibyajyot",
              "jobTitle": "Software Developer",
              "description": "Software developer studying at University of Waterloo with expertise in React, Next.js, and Machine Learning",
              "url": "https://deepamdibyajyot.netlify.app",
              "sameAs": [
                "https://github.com/deepamdibyajyot",
                "https://linkedin.com/in/deepamdibyajyot"
              ],
              "knowsAbout": [
                "React",
                "Next.js", 
                "JavaScript",
                "TypeScript",
                "Python",
                "Machine Learning",
                "PyTorch",
                "Full Stack Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "description": "Full-stack software developer with expertise in modern web technologies and machine learning"
              },
              "mainEntity": {
                "@type": "CreativeWork",
                "name": "Deepam's Professional Resume",
                "description": "Professional resume of Deepam Dibyajyot - Software Developer & ML Engineer",
                "url": "https://deepamdibyajyot.netlify.app/assets/resume.pdf",
                "fileFormat": "application/pdf",
                "encodingFormat": "application/pdf"
              }
            })
          }}
        />
      </head>
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
