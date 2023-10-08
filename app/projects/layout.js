"use client";

import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "app/error.js";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "app/projects/components/Projects.jsx";
import { SITE_ROUTES } from "constants/index.js";
import projects from "app/sections/project/projects.json";



export default function Page() {
  const btnRef = useRef(null);
  const isBtnInView = useInView(btnRef, { once: true });

  return (
    <div className="container mx-auto">
      {" "}
      {/* Add a container div */}
      <LazyMotion features={domAnimation}>
        <HeadingDivider title="All projects" />
        <div className="h-10 md:h-14" />

        <div className="flex flex-col items-center gap-8 md:gap-14">
          <Suspense
            fallback={
              <div className="flex-center">
                <Loader />
              </div>
            }
          >
            <ErrorBoundary FallbackComponent={Error}>
              <Projects projects={projects} />
            </ErrorBoundary>
          </Suspense>
        </div>
      </LazyMotion>
    </div>
  );
}