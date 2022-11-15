import React, { useRef } from "react";
import Particles from "react-tsparticles";
// import { loadFireworksPreset } from "tsparticles-preset-fireworks"; //ipmorting custom presets
function Particle() {
  const particlesInit = (main) => {
    console.log(main);
    // loadFireworksPreset(main); //loading custom presets here

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const ref = useRef();

  return (
    <>
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // preset: "fireworks",   //custom presets

            background: {
              color: {
                value: "none",
              },
            },

            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 10,
                },
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "random",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 200,
                },
                value: 15,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
                // type: "image",
                // image: {
                //   src: png,
                // },
              },
              size: {
                random: true,
                value: 5,
              },
              style: {},
            },
            detectRetina: true,
          }}
        />
      </div>
    </>
  );
}

export default Particle;
