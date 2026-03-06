import { useCallback, memo, useMemo } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // Use slim version instead of full
import particlesJSON from "particles.json";
import { useTheme } from "next-themes";

const ParticlesBg = memo(() => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const particlesInit = useCallback(async (engine) => {
    // Use loadSlim instead of loadFull to reduce bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Remove console.log in production for better performance
    if (process.env.NODE_ENV === 'development') {
      console.log(container);
    }
  }, []);

  // Create theme-aware particle options
  const particleOptions = useMemo(() => {
    const isDark = currentTheme === "dark";
    return {
      ...particlesJSON,
      background: {
        ...particlesJSON.background,
        color: {
          value: isDark ? "#000" : "#EDE8E0"
        }
      },
      particles: {
        ...particlesJSON.particles,
        color: {
          ...particlesJSON.particles.color,
          value: isDark ? "#fff" : "#000"
        }
      }
    };
  }, [currentTheme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
      style={{ position: 'absolute', inset: 0, zIndex: -1 }}
    />
  );
});

ParticlesBg.displayName = 'ParticlesBg';

export default ParticlesBg;
