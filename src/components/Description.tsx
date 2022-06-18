import * as React from 'react';
import { StateObject } from '../types';
import Profile from './Profile';

type DescriptionProps = {
  character: StateObject;
  pronouns: StateObject;
}
const Description: React.FC<DescriptionProps> = (props) => {
    return (
      <div>
        <h2>Description</h2>
        <div className='description-container'>
      <p className='description'>The character is <span className='highlight'>very tall</span>.</p>
      <div className='dummy-gap'></div>
        <Profile />
    </div></div>
    );
  }
  
  export default Description;

  /**
   * const initialPronouns: StateObject = {
  // relevant for any text
  pronounNom: 'he',
  pronounGen: 'his',
  pronounObj: 'him',
}
const initialCharacter: StateObject = {
  // relevant for description only (unless I can figure out how to depict it later on)
  age: '30',
  hairApp: 'neatly combed',
  teeth: 'gapped',
  skinFaceQal: 'well-moisturized',
    // relevant for comportment and avatar [currently empty]
  // relevant for avatar only [currently empty]
  // relevant for description and avatar
  eyeColor: 'brown',
  eyeAspect: 'round',
  eyePos: 'wide-set',
  lashesQual: 'long',
  browsQual: 'unruly',
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