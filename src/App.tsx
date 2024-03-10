import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { FPV as Fpv } from "./components/FPV";
import { Player } from "./components/Player";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TexturesSelect";

function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={2}/>
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
      <TextureSelector />
    </>
  )
}

export default App
