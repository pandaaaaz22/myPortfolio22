import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HackerBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = {
    background: {
      color: {
        value: "transparent", // Keep transparent so your CSS gradient shows through
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab", // Connects lines to cursor
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#00ff41", // Matrix Green
      },
      links: {
        color: "#00ff41",
        distance: 150,
        enable: true,
        opacity: 0.2, // Subtle lines
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1, // Slow movement
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle", // You can change this to "square" for more digital feel
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // Behind text but above background color
        }}
      />
    );
  }

  return <></>;
};

export default HackerBackground;