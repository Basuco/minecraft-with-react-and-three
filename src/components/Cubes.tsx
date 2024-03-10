import { useStore } from '../hooks/useStore';
import { Cube } from './Cube';
import { CubeType } from '../type';

export const Cubes = () => {
    const [cubes] = useStore(state => [state.cubes]);
    return cubes.map(({ id, position, texture } : CubeType) => {
        return (
            <Cube
                key={id}
                id={id}
                position={position} 
                texture={texture} 
            />
        )
    })
}