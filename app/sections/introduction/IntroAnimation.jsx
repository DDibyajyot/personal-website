import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import * as React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";


const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  //color is white
  color: ({ x, y, image }) => { return "white"; },
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 5);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

export function WelcomeAnimation() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { theme, systemTheme } = useTheme();
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";

	return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
		marginTop: "-140px",
      }}
    >
      <ParticleImage
        src={"/favicon.png"}
        width={Number(680)}
        height={Number(680)}
        scale={1.25}
        entropy={23}
        maxParticles={7000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        //background color should be transparent
        backgroundColor={
          darkThemeColor ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)"
        }
      />
    </div>
  );
}
