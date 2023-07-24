import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Moon } from "./Moon";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MoonPage1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const elemRef = useRef(null);

  return (
    <>
      <mesh ref={elemRef} position={[0, 0, 0]}>
        <Moon scale={0.5} rotation={[0, 0, 0]} />
      </mesh>
    </>
  );
};
