import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { MoonHalf } from "./MoonHalf";

const LandingPage = () => {
  const cubeRef = useRef();
  const rotationAmount = Math.PI / 2;
  const rotationDuration = 20;

  useEffect(() => {
    const rotateClockwise = () => {
      gsap.to(cubeRef.current.rotation, {
        y: rotationAmount,
        duration: rotationDuration,
        onComplete: rotateCounterClockwise,
      });
    };

    const rotateCounterClockwise = () => {
      gsap.to(cubeRef.current.rotation, {
        y: -rotationAmount,
        duration: rotationDuration,
        onComplete: () => {
          cubeRef.current.rotation.y = 0; // Reset rotation
          rotateClockwise();
        },
      });
    };

    rotateClockwise();
  }, []);

  useFrame(() => {
    // Additional animation logic if needed
  });

  return (
    <mesh ref={cubeRef} position={[0, -4, 3]}>
      <MoonHalf scale={0.8} rotation={[0, 0, 5]} />
    </mesh>
  );
};

export default LandingPage;
