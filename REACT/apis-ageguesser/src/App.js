import './App.css';
import Axios from "axios";
import { useEffect, useState} from "react";

function App() {

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [nameCount, setNameCount] = useState(0);

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${userName}`).then((res) => {
      setUserAge(res.data.age);
      setNameCount(res.data.count);
    });
  }

  return (
    <div className="App">
      <h2> Enter your name and we'll guess your age! </h2>
      <h4>We'll also tell you how many people with your name we found!</h4>
      <input placeholder='Ex: Anna...' 
      onChange={(event) => {
        setUserName(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          fetchAge() 
        }
      }}
      />
      <button onClick={fetchAge}>Guess my age!</button>

      <br></br>
      <br></br>

      <h2>Your age: {userAge}</h2>
      <h3>We found {nameCount} people with that name!</h3>
    </div>
  );
}


/*
Really useful thing:

if you have an object on your page that you're always tryna get stuff from, but its initialized as null:

{predictedAge.age} would crash the site on startup because predictedAge is initalized as null, there's 
no .age to access.

However, if you do {predictedAge?.age}, itll make sure the thing isn't null before you do it.


*/

export default App;
