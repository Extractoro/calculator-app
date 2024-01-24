import { Toaster } from "react-hot-toast";
import "./App.css";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Calculator />
      <Toaster />
    </>
  );
}

export default App;
