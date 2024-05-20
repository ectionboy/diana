import React, { useEffect, useState } from 'react';
    const startDate = new Date('2022-11-21');

const About = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const updateTime = () => {
      const currentDate = new Date();
      const differenceInTime = currentDate - startDate;

      const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
      const remainingTimeAfterDays = differenceInTime % (1000 * 60 * 60 * 24);
      const differenceInHours = Math.floor(remainingTimeAfterDays / (1000 * 60 * 60));
      const remainingTimeAfterHours = remainingTimeAfterDays % (1000 * 60 * 60);
      const differenceInMinutes = Math.floor(remainingTimeAfterHours / (1000 * 60));
      const remainingTimeAfterMinutes = remainingTimeAfterHours % (1000 * 60);
      const differenceInSeconds = Math.floor(remainingTimeAfterMinutes / 1000);



      setTimeElapsed({
        days: differenceInDays,
        hours: differenceInHours,
        minutes: differenceInMinutes,
        seconds: differenceInSeconds
      });
    };

    const intervalId = setInterval(updateTime, 1000);

    // Викликаємо updateTime одразу, щоб відображати час при завантаженні сторінки
    updateTime();

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  console.log(timeElapsed.seconds)

  return (
    <>
    <br />
      <h2>Ми разом:</h2>
      <br />
      <p>Днів: {timeElapsed.days}</p>
      <p>Годин: {timeElapsed.hours}</p>
      <p>Хвилин: {timeElapsed.minutes}</p>
      <p>Секунд: {timeElapsed.seconds}</p>
      <br />
    </>
  );
};

export default About;
