import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
} from "react-particle-image";

// Particle options
const particleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: () => "white",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
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

  // Effect to handle the fade-in after 1 second
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true); // Set visibility to true after 1 second
    }, 1000);
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
        maxParticles={5000}
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
