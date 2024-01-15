import "./App.css";
import { Login } from "./components/Rifats/Auth";
import Calculator from "./components/Rifats/Calculator";
import DigitalClock from "./components/Rifats/DigitalClock";

const App = () => {
  return (
    <>
      <Login/>
      <Calculator/>
      <DigitalClock />
    </>
  );
};

export default App;
