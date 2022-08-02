import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeak = () => {
  const [write, setWrite] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <textarea
      placeholder='Enter Something'
        style={{width:'300px' , height:'200px' , boxShadow:'0px  0px 10px 5px grey inset'}}
        value={write}
        onChange={(event) => setWrite(event.target.value)}
      />
      <br/>
      <button className='btn btn-outline-danger' onClick={() => speak({ text: write })}>Speak</button>
    </div>
  );
};

export default TextToSpeak;
