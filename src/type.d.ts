export type ActionKeyMap = {
    [key : string] : string
}

export interface CubeType {
    id: string;
    position: [number, number, number];
    texture: string;
}

export interface StoreState {
    texture: string;
    cubes: CubeType[];
    addCube: (x: number, y: number, z: number) => void;
    removeCube: (id: string) => void;
    setTexture: (texture: string) => void;
    saveWorld: () => void;
    resetWorld: () => void;
}