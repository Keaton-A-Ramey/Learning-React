import './App.css';
import Axios from "axios";
import { useState, useEffect} from "react";

// Used to fetch data from API
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.fact);
});

// Alternate fetch using axios
Axios.get("https://catfact.ninja/fact").then((res) => {
  console.log(res.data);
})

function App() {

  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  // This isnt recommended way, but we do it for now. 
  useEffect(() => {
    fetchCatFact();
  }, []);

  // If you do it here, itll do it infinitely.
  // This will show every time the component updates
  // When it updates, itll get another cat fact
  // So the changes keep changing itself, cycle cycle cycle
  // ONLY WHEN IT MOUNTS
  /*Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  });
*/
  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p> {catFact} </p>
    </div>

    
  );
}

export default App;
