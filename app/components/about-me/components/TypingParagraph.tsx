import React, { useState, useEffect } from 'react';

const TypingParagraph = () => {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInSpeed = 50; 

  useEffect(() => {
    let timeoutId: any;

    const fadeInText = () => {
      setIsVisible(true);
    };

    timeoutId = setTimeout(fadeInText, fadeInSpeed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 

  return (
    <p className={`text-2xl mb-1 px-8 pt-8 pb-4 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      👋 Hey there! I'm Sagun Saluja, a passionate Software Developer based in Mississauga, Ontario.
    </p>
  );
};

export default TypingParagraph;
