import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { useStore } from "../hooks/useStore";
import { ThreeEvent } from "@react-three/fiber";
import { Mesh } from "three";

export function Ground() {
    const [ref] = usePlane<Mesh>(() => ({
        rotation: [-Math.PI / 2, 0, 0], // x, y, z
        position: [0, -0.5, 0]
    }))

    const [addCube] = useStore((state) => [state.addCube])

    groundTexture.repeat.set(100, 100);

    const handleClickGround = (event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();
        const [x, y, z] = Object.values(event.point).map(n => Math.ceil(n));
        addCube(x, y, z);
    }

    return (
        <mesh
            onClick={handleClickGround}
            ref={ref}>
            <planeGeometry args={[100, 100]}/>
            <meshStandardMaterial attach="material" map={groundTexture}/>
        </mesh>
    )
}