import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeakToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button className='btn btn-outline-danger mx-1' onClick={SpeechRecognition.startListening}>Start</button>
      <button className='btn btn-outline-dark mx-1' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='btn btn-outline-success' onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeakToText;
