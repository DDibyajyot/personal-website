"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="section">
        <HeadingDivider title="About me" />
        <div className="pt-10 pb-16 max-w-6xl flex flex-col gap-3">
          <div
            tabIndex="0"
            ref={ref}
            className="text-xl font-light leading-relaxed"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img
              src="/assets/projects/deep.png" // Replace with the actual path to your image
              alt="Deepam's Image"
              className="w-120 h-80 rounded mx-auto mb-12" // Adjust size and styling as needed
            />
            <p>
              Hey there! I'm Deepam, a computer science student at the
              University of Waterloo, and I'm passionate about software
              development.
            </p>
            <p>
              I'm a curious soul with a deep love for space, books, anime,
              gaming, and photography. I enjoy supporting my favorite football,
              cricket, and F1 teams. When I'm not coding, you'll find me
              experimenting in the kitchen or strumming my ukulele!
            </p>
            <br></br>
            <p>
              I thrive on working with new technologies to build exciting
              projects, including full-stack development. Currently, I'm
              exploring cloud computing and machine learning, with some cool
              projects on the way!
            </p>
            <br></br>
            <p>
              I'm actively seeking a co-op/internship opportunity for Spring
              2025. Check out my resume{" "}
              <a className="about-me" href="/assets/resume.pdf">
                here
              </a>{" "}
              and feel free to reach out to{" "}
              <a className="about-me" href="mailto:dibyajyotdeepam@gmail.com">
                me
              </a>
              !<br></br>
              (P.S I'm all ears for any book, anime, or music recommendations!)
            </p>
            <style jsx>
              {`
                a.about-me {
                  text-decoration: underline;
                  background-color: white;
                  color: black;
                  padding: 3px 5px; /* Adjust padding as needed */
                  transition: background-color 0.3s, color 0.3s;
                }

                a.about-me:hover {
                  text-decoration: none;
                  background-color: transparent;
                  color: white;
                }
              `}
            </style>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
