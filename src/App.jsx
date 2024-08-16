import React, { useState } from 'react';
import HymnStaves from './components/HymnStaves';

function App() {
  const [keySignature, setKeySignature] = useState('C');
  const [timeSignature, setTimeSignature] = useState('4/4');

  return (
    <div>
      <h1>Simple Transcriber!</h1>
      
      <div>
        <label>Key Signature: </label>
        <select value={keySignature} onChange={(e) => setKeySignature(e.target.value)}>
          <option value="Ab">Ab</option>
          <option value="A">A</option>
          <option value="Bb">Bb</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="Db">Db</option>
          <option value="D">D</option>
          <option value="Eb">Eb</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F#">F#</option>
          <option value="Gb">Gb</option>
          <option value="G">G</option>
        </select>
      </div>
      
      <div>
        <label>Time Signature: </label>
        <select value={timeSignature} onChange={(e) => setTimeSignature(e.target.value)}>
          <option value="4/4">4/4</option>
          <option value="3/4">3/4</option>
          <option value="2/4">2/4</option>
          <option value="6/8">6/8</option>
        </select>
      </div>

      <HymnStaves keySignature={keySignature} timeSignature={timeSignature} />
    </div>
  );
}

export default App;