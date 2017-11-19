import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FretUtil from './utils/fret';

class Chord extends Component {
  render() {
    
    const notes = this.props.notes.split('').map(function(item) {
      if (item === 'x') return -1;
      return parseInt(item, 10);
    });

    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80" height="80">
        <text x="60" y="14" fill="black" fontSize="12" fontStyle="italic">
          { this.props.barre === 0 ? '' : this.props.barre + 'fr'}
        </text>
        <text x="20" y="78" fontSize="10" fill="red">
          {this.props.name}
        </text>
        {FretUtil.drawOpenStringNotes(notes)}
        {FretUtil.drawFretboard()}
        {FretUtil.drawNotes(notes)}
      </svg>
    );
  }
}

Chord.defaultProps = {
  barre: 0
}

Chord.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  barre: PropTypes.number
}

export default Chord;
