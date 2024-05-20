import React, { useEffect, useState } from 'react';

const About = () => {
  const [time, setTime] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2022-11-21T00:00:00Z'); 
    const calculateTimeDifference = () => {
      const now = new Date();
      const diff = now - startDate;

      const months = now.getMonth() - startDate.getMonth() +
        (12 * (now.getFullYear() - startDate.getFullYear()));

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ months, days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <br />
      <h2>Ми разом:</h2>
      <br />
      <p>Місяців: {time.months}</p>
      <p>Днів: {time.days}</p>
      <p>Годин: {time.hours}</p>
      <p>Хвилин: {time.minutes}</p>
      <p>Секунд: {time.seconds}</p>
      <br />
    </>
  );
};

export default About;
