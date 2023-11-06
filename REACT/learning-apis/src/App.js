import './App.css';
import Axios from "axios";

// Used to fetch data from API
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {

});

// Alternate fetch using axios
Axios.get("https://catfact.ninja/fact").then((res) => {
  console.log(res.data);
})

function App() {

  return (
    <div className="App">
      <button>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
