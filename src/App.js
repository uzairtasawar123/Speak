import logo from './logo.svg';
import './App.css';
import TextToSpeak from './TextToSpeak';
import SpeakToText from './SpeakToText';

function App() {
  return (
    <div className="App">
      <h1>Text to Speak</h1>
      <TextToSpeak/>
      <h1>Speak to Text</h1>
      <SpeakToText/>
    </div>
  );
}

export default App;
