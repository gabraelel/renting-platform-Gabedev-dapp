// src/components/functions/CountDown.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CountDown({ h, m, s }) {
  const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [seconds, setSeconds] = useState(s);

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) return;

    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    // Cleanup the timer on component unmount or when countdown finishes
    return () => clearTimeout(timer);
  }, [hours, minutes, seconds]);

  return (
    <h6 className="text-white">
      {hours < 10 ? `0${hours}` : hours}h :{' '}
      {minutes < 10 ? `0${minutes}` : minutes}m :{' '}
      {seconds < 10 ? `0${seconds}` : seconds}s
    </h6>
  );
}

CountDown.propTypes = {
  h: PropTypes.number.isRequired,
  m: PropTypes.number.isRequired,
  s: PropTypes.number.isRequired,
};

export default CountDown;

