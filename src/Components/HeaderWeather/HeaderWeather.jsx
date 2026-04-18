import React, { useEffect, useState } from 'react'

const HeaderWeather = ({ title }) => {
  const [time, setTime] = useState(new Date());

  const setDate = `${time.getDate()}/${time.getMonth() < 10 ? String((time.getMonth() + 1)).padStart(2, "0") : time.getMonth()}/${time.getFullYear()}`;

  function formatTime (date) {
    const setHours = date.getHours();
    const setMinutes = date.getMinutes();
    const setSeconds = date.getSeconds();
    
    return `${String(setHours).padStart(2, "0")}:${String(setMinutes).padStart(2, "0")}:${String(setSeconds).padStart(2, "0")}`;    
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval)
  });

  formatTime(time);

  return (
    <header className='header-container'>
      <h2>{title}</h2>
      <section className="time-section">
        <h2>{setDate}</h2>
        <h2>{formatTime(time)}</h2>
      </section>
    </header>
  )
}

export default HeaderWeather