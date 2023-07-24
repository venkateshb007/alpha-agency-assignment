import { Canvas } from "@react-three/fiber";
import LandingPage from "../components/LandingPage";

// Rest of the code in HomePage.jsx


const HomePage = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          top: "43%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontFamily: "Heading",
          width: "50rem",
          fontSize: "5rem",
        }}
      >
        THE ALPHA AGENCY
      </div>
      <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[-60, -5, -10]} />
        <LandingPage />
      </Canvas>
    </div>
  );
};

export default HomePage;
