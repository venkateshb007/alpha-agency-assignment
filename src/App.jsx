import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomePage from "./pages/HomePage";
import MoonPage from "./pages/MoonPage";

const App = () => {
  const elemRef = useRef(null);
  const [animationEnded, setAnimationEnded] = useState(false);
  const rotationAmount = Math.PI / 2;
  const rotationDuration = 20;
  useEffect(() => {
    const element = elemRef.current;

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(element.querySelector(".second"), {
      y: rotationAmount,
      rotation: rotationAmount,
      duration: rotationDuration,
      ease: "power2.out",
      transformOrigin: "center",

      scrollTrigger: {
        trigger: element.querySelector(".second"),
        scrub: true,
        start: "top 40%",
        end: "bottom 90%",
        onEnter: () => setAnimationEnded(false), // Reset animationEnded to false on scroll enter
        onComplete: () => setAnimationEnded(true), // Set animationEnded to true when the animation is completed
      },
    });
  }, []);

  return (
    <div className="App" ref={elemRef}>
      <div className="first" style={{ height: "100vh", width: "100vw" }}>
        <HomePage />
      </div>
      <div className="second" style={{ overflow: "visible", height: "auto" }}>
        <MoonPage />
        {animationEnded && (
          <h1 style={{ fontFamily: "Heading", color: "white" }}>
            This text shows when the animation is ended.
          </h1>
        )}
      </div>
    </div>
  );
};

export default App;

