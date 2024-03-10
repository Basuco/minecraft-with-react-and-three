import { useEffect, useState } from 'react';
import * as images from '../images/images';
import { useStore } from '../hooks/useStore';
import { StoreState } from '../type.d';
import { useKeyboard } from '../hooks/useKeyboard';

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [texture, setTexture] = useStore((state: StoreState) => [state.texture, state.setTexture]);
    const { dirt, grass, glass, wood, log } = useKeyboard();
    
    useEffect(() => {
        const options = { dirt, grass, glass, wood, log };
        const selectedTexture = Object.entries(options).find(([_, isEnabled]) => isEnabled);
        if (selectedTexture) {
            const [textureName] = selectedTexture;
            setTexture(textureName);
        }
    }, [dirt, grass, glass, wood, log]);

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 1000);
        setVisible(true);
        return () => {
            clearTimeout(visibilityTimeout);
        }
    },[texture])

    return (
        <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
            {
                Object.entries(images).map(([imgKey, image]) => {
                    return (
                        <img
                            className={imgKey.replace('Img', '') === texture ? 'selected': ''}
                            key={imgKey}
                            src={image}
                            alt={imgKey} 
                        />
                    )
                })
            }
        </div>
    );
}