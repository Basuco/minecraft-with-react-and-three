import { grassImg, dirtImg, logImg, glassImg, woodImg } from './images';
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';

const glassTexture = new TextureLoader().load(glassImg);
glassTexture.magFilter = NearestFilter;

const dirtTexture = new TextureLoader().load(dirtImg);
dirtTexture.magFilter = NearestFilter;

const logTexture = new TextureLoader().load(logImg);
logTexture.magFilter = NearestFilter;

const woodTexture = new TextureLoader().load(woodImg);
woodTexture.magFilter = NearestFilter;

const groundTexture = new TextureLoader().load(grassImg);
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

export { groundTexture, glassTexture, dirtTexture, logTexture, woodTexture };
