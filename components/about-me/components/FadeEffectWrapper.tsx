"use client"
import React, { useState, useEffect, ReactNode } from "react";

const FadeEffectWrapper = ({ text, children, duration = 50, backgroundColor }: { text?: string, children?: ReactNode, duration?: number, backgroundColor?: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mark the component as mounted on the client side
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, duration]);

  if (!isMounted) {
    return null; // Do not render anything on the server side
  }

  return (
    <p
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${backgroundColor}`}
    >
      {text || children}
    </p>
  );
};

export default FadeEffectWrapper;
