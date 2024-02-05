import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";


function App() {
  const [paintingData, setPaintingData] = 
  const [paintingImageURL, setPaintingImageURL] = useState("");
  const [paintingName, setPaintingName] = useState("");
  const [paintingCount, setPaintingCount] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to the site!</h1>
      <h2>I made this using the Met's API :{")"}</h2>
    </div>
  );
}
export default App;
