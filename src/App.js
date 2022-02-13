import "./App.css";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
import travelData from "./data/db.json";

function App() {
  return (
    <>
      <Home />
      <Tours theUsedData={travelData} />
    </>
  );
}

export default App;
