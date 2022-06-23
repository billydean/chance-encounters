import * as React from 'react';
import { StateObject } from '../types';
import Profile from './Profile';

type DescriptionProps = {
  character: StateObject;
  pronouns: StateObject;
}
const Description: React.FC<DescriptionProps> = ({character, pronouns}) => {
    return (
      <div>
        <h2>Description</h2>
        <div className='description-container'>
      <p className='description'>
      {pronouns.nom} is <span className='highlight'>{character.age}</span> years old. {pronouns.gen} <span className='highlight'>{character.eyeColor}</span> eyes are <span className='highlight'>{character.eyeAspect}</span> and <span className='highlight'>{character.eyePos}</span>, framed by {pronouns.gen} <span className='highlight'>{character.lashesQual}</span> eyelashes and {pronouns.gen} <span className='highlight'>{character.browsQual}</span> eyebrows. {pronouns.gen} <span className='highlight'>{character.hairLength}</span>, <span className='highlight'>{character.hairApp}</span>, <span className='highlight'>{character.hairColor}</span> hair is <span className='highlight'>{character.hairTexture}</span>, and {pronouns.gen} <span className='highlight'>{character.hairStyle}</span> highlights {pronouns.gen} <span className='highlight'>{character.forehead}</span>, <span className='highlight'>{character.cheeks}</span>, and <span className='highlight'>{character.jaw}</span> jawline. Because of {pronouns.gen} <span className='highlight'>{character.faceHair || 'lack of facial hair'}</span>, you can't help but notice {pronouns.gen} <span className='highlight'>{character.chin}</span> chin and <span className='highlight'>{character.nose}</span> nose. When {pronouns.nom} smiles, {pronouns.gen} <span className='highlight'>{character.lips}</span> lips reveals {pronouns.gen} <span className='highlight'>{character.teeth}</span> teeth. You can't help but notice the <span className='highlight'>{character.faceFeat}</span> on {pronouns.gen} <span className='highlight'>{character.skinFaceQal}</span> <span className='highlight'>{character.skinColor}</span> skin.
      </p>
      <div className='dummy-gap'></div>
        <Profile />
    </div></div>
    );
  }
  
  export default Description;

  /**

const initialCharacter: StateObject = {
  
  skinColor: 'olive',
  faceFeat: 'freckles',
  cheeks: 'hollow',
  jaw: 'square',
  chin: 'cleft',
  nose: 'roman',
  lips: 'narrow',
  faceHair: '',
  hairTexture: 'wavy',
  hairLength: 'short',
  hairColor: 'salt-and-pepper',
  hairAmount: 'full head of hair',
  hairStyle: 'side part',
}
   */