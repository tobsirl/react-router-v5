import React, { useState, useEffect } from 'react';

export default function Loading({ text = 'Loading' }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    let id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${text}.`;
      }, 300);
    });

    return () => {
      window.clearInterval(id);
    };
  }, [text]);

  return (
    <div className="container">
      <p className="text-center">{content}</p>
    </div>
  );
}
