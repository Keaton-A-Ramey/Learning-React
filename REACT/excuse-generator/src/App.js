import './App.css';
import Axios from "axios";
import {useState} from "react";

function App() {

  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (myExcuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${myExcuse}/`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  }

  return (
    <div className="App">
      <h2>So you need an excuse?</h2>
      <h3>We have plenty for you, just tell us what kind of excuse you want!</h3>

      <button onClick={() => fetchExcuse("family")}>Family?</button>
      <button onClick={() => fetchExcuse("office")}>Office?</button>
      <button onClick={() => fetchExcuse("children")}>Children?</button>
      <button onClick={() => fetchExcuse("college")}>College?</button>
      <button onClick={() => fetchExcuse("party")}>Party?</button>
      <button onClick={() => fetchExcuse("funny")}>A Funny One?</button>
      <button onClick={() => fetchExcuse("unbelievable")}>An Unbelievable One?</button>
      <button onClick={() => fetchExcuse("developers")}>Developers?</button>
      <button onClick={() => fetchExcuse("gaming")}>Gaming?</button>

      <h3>Here's an excuse for you:</h3>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
