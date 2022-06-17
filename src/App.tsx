import React, { useState } from "react";
import Home from "./home/Home";
import "./App.css";

interface City {
  city: string | undefined;
}
function App() {
  const [city, setCity] = useState<City>();
  return (
    <div className="App">
      <Home city={city} setCity={setCity} />
    </div>
  );
}

export default App;
