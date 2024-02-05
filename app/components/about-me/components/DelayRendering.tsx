import React, { useState, useEffect, ReactNode } from "react";

const DelayRendering = ({ text, children, duration = 50 }: { text?: string, children?: ReactNode, duration?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInSpeed = duration;

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
    <p
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {text || children}
    </p>
  );
};

export default DelayRendering;
