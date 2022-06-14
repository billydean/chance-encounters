import React from 'react';
import Setting from './components/Setting';
import Description from './components/Description';
import Comportment from './components/Comportment';

function App() {
  return (
<div>
<h1>Who Is It?</h1>
  <div className='container'>
        <Setting />
        <Description />
        <Comportment />
  </div>
</div>
  );
}

export default App;
