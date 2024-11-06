import { useRef, useState } from "react";

function App() {
  const [min, setMin] = useState(0);  
  const [sec, setSec] = useState(0);  
  const [isRunning, setRunning] = useState(false);  
  const intervalRef = useRef(null); 

  function start() {
    if (isRunning) {
      
      clearInterval(intervalRef.current);
      setRunning(false);
    } else {
      
      intervalRef.current = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec + 1 === 60) {
            setMin((prevMin) => prevMin + 1); 
            return 0;
          }
          return prevSec + 1;
        });
      }, 1000);
      setRunning(true);
    }
  }

  function reset() {
    clearInterval(intervalRef.current);
    setMin(0); 
    setSec(0); 
    setRunning(false);
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <p>
      Time: {min}:{sec < 10 ? `0${sec}`: sec} 
      </p>
      <button onClick={start}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
