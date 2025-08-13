import { useCallback, memo } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // Use slim version instead of full
import particlesJSON from "particles.json";

const ParticlesBg = memo(() => {
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

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesJSON}
      style={{ position: 'absolute', inset: 0, zIndex: -1 }}
    />
  );
});

ParticlesBg.displayName = 'ParticlesBg';

export default ParticlesBg;
