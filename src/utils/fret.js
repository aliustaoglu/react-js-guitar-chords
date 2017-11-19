import React from 'react';

const openStringLetter = (note, barre) => {
  const letter = note === barre ? '' : 'x';
  return letter;
};

const drawOpenStringNote = (note, stringNo, barre) => {
  const x = (5 - stringNo) * 10 + 2;
  return (
    <text key={'openStr ' + stringNo} x={x} y="10" fill="black" fontSize="12">
      {note < 1 && openStringLetter(note, barre)}{' '}
    </text>
  );
};

const drawOpenStringNotes = (notes, barre = 0) => {
  return notes.map((note, ind) => {
    return drawOpenStringNote(note, ind, barre);
  });
};

const ordinatBuild = ordinats => {
  return ordinats.map( (ordinat, ind) => {
    return <line x1="5" y1={ordinat} x2="55" y2={ordinat} style={{ stroke: 'rgb(0,0,0)', strokeWidth: '0.5' }} />;
  } );
}

const axisBuild = axes => {
  return axes.map( (axis, ind) => {
    return <line x1={axis} y1="12" x2={axis} y2="62" style={{ stroke: 'rgb(0,0,0)', strokeWidth: '0.5' }} />;
  } );
}

const drawFretboard = frets => {
  
  return (
    <g>
      <line x1="5" y1="12" x2="55" y2="12" style={{ stroke: 'rgb(0,0,0)', strokeWidth: '2' }} />

      { ordinatBuild([22,32,42,52,62]) }
      { axisBuild([5,15,25,35,45,55]) }
      
    </g>
  );
};

const drawNotes = notes => {
  const circles = notes.map((note, ind) => {
    if (note < 1) return <g />;

    const x = (6 - ind) * 10 - 5;
    const y = 7 + note * 10;

    return <circle cx={x} cy={y} r="2" stroke="black" strokeWidth="1" fill="black" />;
  });

  return <g>{circles}</g>;
};

const lowestFret = notes => {
  return notes.min();
};

const highestFret = notes => {
  return notes.max();
};

export default {
  openStringLetter,
  drawOpenStringNote,
  drawOpenStringNotes,
  drawFretboard,
  drawNotes
};
