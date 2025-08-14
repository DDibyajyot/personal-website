import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as React from "react";
import dynamic from "next/dynamic";

// Dynamically import ParticleImage to reduce initial bundle size and defer loading
const ParticleImage = dynamic(() => import("react-particle-image"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-[680px] h-[680px]">
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-full w-32 h-32"></div>
    </div>
  ),
});

// Import specific utilities directly
import { Vector, forces } from "react-particle-image";

// Optimized particle options for better performance
const particleOptions = {
  filter: ({ x, y, image }) => {
    // Reduce filter complexity to decrease main thread work
    const pixel = image.get(x, y);
    return pixel.b > 60; // Slightly higher threshold for fewer particles
  },
  color: () => "white",
  radius: () => Math.random() * 1.2 + 0.4, // Smaller particles for better performance
  mass: () => 35, // Reduced mass for lighter calculations
  friction: () => 0.18, // Slightly higher friction for quicker settling
  initialPosition: ({ canvasDimensions, finalPosition }) => {
    return (
      finalPosition ||
      new Vector(canvasDimensions.width / 2, canvasDimensions.height / 5)
    );
  },
  initialVelocity: () => new Vector(0, 0),
};

// Force interactions on mouse movement
const motionForce = (x, y) => forces.disturbance(x, y, 5);

// WelcomeAnimation Component
export function WelcomeAnimation() {
  const { theme, systemTheme } = useTheme();
  const colorMode = theme === "system" ? systemTheme : theme;
  const darkThemeColor = colorMode === "dark";

  // State to track whether the fade-in should happen
  const [isVisible, setIsVisible] = useState(false);

  // Delay animation to improve LCP - start after critical content loads
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true); // Set visibility to true after delay
    }, 1500); // Increased delay to allow LCP to complete
    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);

  return (
    <div
      style={{
        marginTop: "-100px",
        opacity: isVisible ? 1 : 0, // Apply fade-in by toggling opacity
        transition: "opacity 1.5s ease-in", // Smooth fade-in over 1.5 seconds
        transform: "none", // No transform (like scale) applied
      }}
    >
      <ParticleImage
        src={"/favicon.png"}
        width={680}
        height={680}
        scale={1.25} // No scaling
        entropy={23} // Keep original entropy value
        maxParticles={3000} // Further reduced for better main-thread performance
        creationDuration={0} // Particles will appear instantly without growing
        creationTimingFn={() => 1} // Particles reach full size immediately
        particleOptions={particleOptions} // Include updated particle options
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor={
          darkThemeColor ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)"
        }
      />
    </div>
  );
}
