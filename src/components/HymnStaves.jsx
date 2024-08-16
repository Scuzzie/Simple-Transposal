import React, { useEffect } from 'react';
import Vex from 'vexflow';

const { Renderer, Stave, StaveNote, Formatter, Voice } = Vex.Flow;

function HymnStaves({ keySignature, timeSignature }) {
  useEffect(() => {
    const div = document.getElementById('output');
    
    // Clear the previous rendering
    div.innerHTML = '';

    const renderer = new Renderer(div, Renderer.Backends.SVG);

    renderer.resize(500, 400);
    const context = renderer.getContext();

    // Treble Clef
    const trebleStave = new Stave(10, 40, 400);
    trebleStave.addClef('treble').addKeySignature(keySignature).addTimeSignature(timeSignature).setContext(context).draw();

    // Bass Clef
    const bassStave = new Stave(10, 140, 400);
    bassStave.addClef('bass').addKeySignature(keySignature).addTimeSignature(timeSignature).setContext(context).draw();

    // Example notes (will replace with drag-and-drop later)
    const notes = [
      new StaveNote({ keys: ['c/4'], duration: 'q' }),
      new StaveNote({ keys: ['d/4'], duration: 'q' }),
      new StaveNote({ keys: ['e/4'], duration: 'q' }),
      new StaveNote({ keys: ['f/4'], duration: 'q' }),
    ];

    const voice = new Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    new Formatter().joinVoices([voice]).format([voice], 400);
    voice.draw(context, trebleStave);

  }, [keySignature, timeSignature]);

  return <div id="output"></div>;
}
export default HymnStaves;