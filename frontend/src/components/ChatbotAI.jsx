import React, { useState, useEffect } from "react";
import "../styles/heroAnimation.css";

const ChatbotAI = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = "Student AI Assistant";
  const typingSpeed = 150; // Speed of writing
  const deletingSpeed = 50; // Speed of backspacing (faster)
  const pauseTime = 1000; // Wait 1 second after finishing

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      // 1. If currently writing and haven't finished yet
      if (!isDeleting && text.length < fullText.length) {
        setText(fullText.slice(0, text.length + 1));
      } 
      // 2. If finished writing, pause then switch to deleting
      else if (!isDeleting && text.length === fullText.length) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
        return; // Exit here so we don't set the next timer immediately
      } 
      // 3. If currently deleting and text exists
      else if (isDeleting && text.length > 0) {
        setText(fullText.slice(0, text.length - 1));
      } 
      // 4. If finished deleting, pause briefly then switch to writing
      else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
      }
    };

    // Determine speed based on current action
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div className="chatbot-full">
      <div className="chatbot-header">
        <span className="bot-icon">🤖</span>
        <span className="typing-container">
          {text}
          <span className="cursor">|</span>
        </span>
      </div>
      <div className="chatbot-body">
        <p>Hello! I am ready to help you learn. Ask me anything about the courses above.</p>
      </div>
    </div>
  );
};

export default ChatbotAI;