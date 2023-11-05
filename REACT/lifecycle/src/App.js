import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Text } from "./Text";

function App() {

  
  const [showText, setShowText] = useState(false);
  // Basically, when this button is pressed, it either hides or shows the input and the text inputted in
  // that input field. When it is hidden, it literally is not in the source code, or unmounted. When text
  // is typed into the field, it is updated. When the button is pressed to turn it on, the text component
  // is mounted. Thus, mounting, updating, and unmounting. 


  // This triggers every time a component is mounted. So, for instance, this could be very useful if 
  // you're making an API call to fetch data or something every time the website is loading. 

  
  useEffect(() => {
    console.log("COMPONENT MOUNTED");

  }, []);
  // That comma and array afterwards indicates which props or state changes we want to trigger the useEffect.
  // So for now, this only triggers when the text state changes. 

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
        >
          Toggle Text
      </button>

      {showText && <Text />}
    </div>
  );
}

export default App;



/*
Three stages:

Mounting: Elements coming to life, components in the source code and on the site

Updating: Component is changing, what it is returning is changing depending on something (props). 
In this example, it is the text that is being typed into the input field that is updating the 
component

Unmounting: Components cease to exist in website source code. Here, it is when the button is pressed.
*/
