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

      const months =
        now.getMonth() -
        startDate.getMonth() +
        12 * (now.getFullYear() - startDate.getFullYear());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ months, days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


function changeName (v) {
  setName(v.target.value)
}
function changePassword (v) {
  setPassword(v.target.value)
}
function chekLogin (e) {
  e.preventDefault();

  const nameTrue = "diana";
  const passwordTrue = "21112022";

  const nameLC = name.toLowerCase();

  if (nameLC !== nameTrue) {
    return;
  }
  if (password !== passwordTrue) {
    return;
  }

  setIsLogin(true);
}

  return (
    <div style={{margin:"10px"}}>
    {!isLogin?     <div>
      <br />
      <form onSubmit={chekLogin}> 
        <label>Login: </label>
        <input value={name} onChange={(v)=>{changeName(v)}} type="text" />
        <br />
        <br />
        <label>Password: </label>
        <input value={password} onChange={(v)=>{changePassword(v)}} type="text" />
        <br />
        <br />
        <button type='submit' style={{padding:"12px", fontSize:"18px"}}>Login</button>
        <br /> <br />
      </form>
    </div>:<div>
        <br />
        <h2>Ми разом:</h2>
        <br />
        <p>Місяців: {time.months}</p>
        <p>Днів: {time.days}</p>
        <p>Годин: {time.hours}</p>
        <p>Хвилин: {time.minutes}</p>
        <p>Секунд: {time.seconds}</p>
        <br />
      </div>}


      
    </div>
  );
};

export default About;
