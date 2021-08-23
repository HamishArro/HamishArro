import { Canvas } from "@react-three/fiber";
import "./App.css";

const Scene = () => {
  return (
    <Canvas>
      <mesh>
        <planeBufferGeometry args={[3, 5]} />
      </mesh>
    </Canvas>
  );
};

const App = () => {
  return <Scene />;
};

export default App;
