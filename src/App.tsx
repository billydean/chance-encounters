import React, { useState } from 'react';
import Setting from './components/Setting';
import Description from './components/Description';
import Comportment from './components/Comportment';
import { StateObject } from './types';

// giant state object for now, for setup
// may change state management strategy
const initialPronouns: StateObject = {
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
const initialComportment: StateObject = {
  // relevant for comportment and avatar [currently empty]
  // relevant for comportment only
  height: 'tall',
  build: 'lanky',
  appearance: '',
  profession: 'sailor',
  // HEXACO: '',
  personality: ['impressionable', 'dutiful', 'insecure', 'patient'],
  virtues: ['honest'],
  vices: ['wasteful'],
  education: 'no formal education',
};


const App: React.FC = () => {
  const [character, updateCharacter] = useState<StateObject>(initialCharacter);
  const [comportment, updateComportment] = useState<StateObject>(initialComportment);
  const [pronouns, updatePronouns] = useState<StateObject>(initialPronouns);
  return (
<div>
<h1>Who Is It?</h1>
  <div className='container'>
        <Setting />
        <Description character={character} pronouns={pronouns}/>
        <Comportment />
  </div>
</div>
  );
}

export default App;
