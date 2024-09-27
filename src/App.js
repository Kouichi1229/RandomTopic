import React, { useState, useEffect, useRef } from 'react';
import './App.css';



function App() {
  const [topic, setTopic] = useState('');
  const [topics, setTopics] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch('/topics.txt')
      .then(response => response.text())
      .then(text => {
        const loadedTopics = text.split('\n').filter(line => line.trim() !== '');
        setTopics(loadedTopics);
      });
  }, []);

  useEffect(() => {
    if (isRunning && topics.length > 0) {
      intervalRef.current = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * topics.length);
        setTopic(topics[randomIndex]);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, topics]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  return (
    <div className="container">
      <h1>雑談</h1>
      <button onClick={start} className="generate-btn">
        スタート
      </button>
      <button onClick={stop} className="generate-btn stop-btn">
        スタップ
      </button>
      {topic && (
        <div className="topic-display">
          <p>{topic}</p>
        </div>
      )}
    </div>
  );
}

export default App;
