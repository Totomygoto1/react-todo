import './../App.css';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  let [count, setCount] = useState(0);
  let myTimeout = useRef(null);

  useEffect(() => {
    myTimeout.current = setTimeout(startClock, 1000);
  });

  const startClock = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      document.getElementById('time').innerHTML = '  Test time is finished.. ';
      clearTimeout(myTimeout);
    }
  };

  return (
    <>
      <p>
        <span id="time">Your test time: </span>
        {count}
      </p>
    </>
  );
};

export default Timer;
