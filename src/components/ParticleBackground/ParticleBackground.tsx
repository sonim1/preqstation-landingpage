import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: {
          value: 160,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: {
          value: ["#00E6A0", "#ffffff", "#5CA8FF", "#A78BFA"],
        },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.4, max: 0.9 },
        },
        size: {
          value: { min: 2, max: 5 },
        },
        links: {
          enable: true,
          distance: 140,
          color: "#00E6A0",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 0.4, max: 1 },
          direction: "none",
          outModes: { default: "bounce" },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.03,
            opacity: 1,
            color: { value: "#00E6A0" },
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.5, color: "#00E6A0" },
          },
          bubble: {
            distance: 150,
            size: 8,
            duration: 0.3,
            opacity: 1,
            color: { value: "#00E6A0" },
          },
          repulse: {
            distance: 150,
            speed: 0.5,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="w-full h-full pointer-events-auto">
        <Particles id="tsparticles" options={options} className="w-full h-full" />
      </div>
    </div>
  );
}
