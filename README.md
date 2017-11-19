# React Js Guitar Chords
Bare minimum guitar chord builder that does not use d3 or other libraries. It is a dummy component. Meaning for that is, it does not know any musical term or can build a chord from its name. You have to supply the input for it. I needed a simple component that does not drag lots of other dependencies.


# Installation
- npm install --save react-js-guitar-chords

# Usage
```javascript
import Chord from 'react-js-guitar-chords';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chord name="C" notes="010230" />
      </div>
    );
  }
}
```


# Screenshots

![Chord C](https://raw.githubusercontent.com/aliustaoglu/react-js-guitar-chords/master/img/chord-c.png)

![Chord Am](https://raw.githubusercontent.com/aliustaoglu/react-js-guitar-chords/master/img/chord-am.png)

![Chord G](https://raw.githubusercontent.com/aliustaoglu/react-js-guitar-chords/master/img/chord-g.png)