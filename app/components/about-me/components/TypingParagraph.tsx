import React, { useState, useEffect } from 'react';

const TypingParagraph = () => {
  const [text, setText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true); // Allow animation on initial render
  const fullText =
    "👋 Hey there! I'm Sagun Saluja, a passionate Software Developer based in Mississauga, Ontario.";

  const typingSpeed = 50; // in milliseconds
  const delayBetweenSentences = 300; // in milliseconds

  useEffect(() => {
    let charIndex = 0;
    let timeoutId: any;

    const typeText = () => {
      setText((prevText) => prevText + fullText[charIndex]);
      charIndex++;

      if (charIndex < fullText.length-1) {
        timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        // Add a delay before clearing the text for better readability
        timeoutId = setTimeout(() => {
          setIsAnimating(false); // Set the flag to prevent further animation
        }, delayBetweenSentences);
      }
    };

    // Run the animation only if isAnimating is true
    if (isAnimating) {
      typeText();
    }

    // Cleanup function to clear timeouts on unmount and when isAnimating changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAnimating]); // Run effect whenever isAnimating changes
  return (
    <p className="text-2xl mb-1 px-8 pt-8 pb-4 text-center">
      {text}
      {isAnimating && <span className="inline-block mx-1 animate-blink">|</span>}
    </p>
  );
};

export default TypingParagraph;
