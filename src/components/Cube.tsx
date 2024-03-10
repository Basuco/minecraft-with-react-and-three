import { useBox } from "@react-three/cannon";
import { CubeType } from "../type";
import * as textures from '../images/textures';
import { Mesh, Texture } from "three";
import { useState } from "react";
import { useStore } from "../hooks/useStore";

export const Cube = ({ id, position, texture } : CubeType) => {
    const [isHovered, setIsHovered] = useState(false);
    const [ref] = useBox<Mesh>(() => ({
        type: 'Static',
        position
    }));
    const [removeCube] = useStore(state => [state.removeCube]);
    const activeTexture : Texture = (textures as Record<string, Texture>)[texture + 'Texture'];
    return (
        <mesh ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation();
                setIsHovered(true);
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setIsHovered(false);
            }}
            onClick={(e) => {
                e.stopPropagation();
                if (e.altKey) {
                    removeCube(id);
                }
            }}
        >
            <boxGeometry attach='geometry'/>
            <meshStandardMaterial
                color={isHovered ? 'grey': 'white'}
                attach='material' 
                map={activeTexture}
            />
        </mesh>
    );
}