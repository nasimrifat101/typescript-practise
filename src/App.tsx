import "./App.css";
import { Login, Signup } from "./components/Rifats/Auth";
import Calculator from "./components/Rifats/Calculator";
import DigitalClock from "./components/Rifats/DigitalClock";

const App = () => {
  return (
    <>
      <Login/>
      <Signup/>
      <Calculator/>
      <DigitalClock />
    </>
  );
};

export default App;
