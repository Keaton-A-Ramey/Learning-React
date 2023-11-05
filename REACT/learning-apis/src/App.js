import './App.css';

// Used to fetch data from API
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {

});

function App() {

  return (
    <div className="App">
      <button>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
