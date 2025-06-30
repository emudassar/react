import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 font-sans">
      <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl text-center border-t-8 border-purple-500 transform transition-all duration-500 hover:scale-105">
        
        <h1 className="text-5xl md:text-3xl font-extrabold mb-4 drop-shadow-lg text-purple-600">
          Simple Timer
        </h1>
        
        <div className="text-6xl md:text-3xl font-mono font-bold text-gray-800 tracking-wider">
          <span className="animate-pulse">{seconds}</span>
        </div>
        
        <p className="text-xl md:text-3xl font-semibold text-gray-500 mt-2">
          seconds
        </p>
        
      </div>
    </div>
  );
}

export default Timer;