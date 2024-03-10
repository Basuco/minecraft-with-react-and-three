import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { CubeType, StoreState } from '../type';

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [{
        id: nanoid(),
        position: [1, 1, 1],
        texture: 'dirt'
    }],
    addCube: (x: number, y: number, z: number) => {
        set((state : StoreState) => ({
            cubes: [
                ...state.cubes,
                {
                    id: nanoid(),
                    position: [x, y, z],
                    texture: state.texture
                }
            ]
        }))
    },
    removeCube: (id: string) => {
        set((state : StoreState) => ({
            cubes: state.cubes.filter((cube: CubeType) => cube.id !== id)
        }))
    },
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {}
}))