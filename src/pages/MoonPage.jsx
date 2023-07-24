import { Canvas } from "@react-three/fiber";
import { MoonPage1 } from "../components/MoonPage1";

const MoonPage = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[-60, -5, -10]} />
        <MoonPage1 />
      </Canvas>
    </div>
  );
};

export default MoonPage;
