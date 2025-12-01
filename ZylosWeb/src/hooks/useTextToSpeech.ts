import { useState, useEffect } from 'react';

const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;

  const speak = (text: string) => {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = () => {
      setIsSpeaking(false);
    };
    setIsSpeaking(true);
    synth.speak(utterThis);
  };

  return { isSpeaking, speak };
};

export default useTextToSpeech;