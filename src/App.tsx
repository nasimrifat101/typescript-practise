import { useState, useEffect } from "react";
import "./App.css";
import Card from "./pages/test";

const App = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateCurrentTime = () => {
      const date = new Date();
      setTime({
        hour: date.getHours() % 12 || 12,
        minute: date.getMinutes(),
        second: date.getSeconds(),
      });
    };

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="digital-clock">
        <div className="time">
          {String(time.hour).padStart(2, "0")} :{" "}
          {String(time.minute).padStart(2, "0")} :{" "}
          {String(time.second).padStart(2, "0")}
        </div>
        <div className="date">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="grid grid-cols-3">
        <Card />
      </div>
    </>
  );
};

export default App;
