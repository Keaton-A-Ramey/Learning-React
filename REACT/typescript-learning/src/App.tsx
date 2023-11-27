import './App.css';
import { Person, Country } from "./Components/Person";

function App() {

  // Last thing: 

  // TYPE THE PARAMETERS, name is a string. TYPE THE RETURN(!), after the parentheses.
  const getAge = (name: string): number => {
    return 99;
  }


  // Going to essentially do the same thing as the other project but using typescript
  return (
    <div className="App">
      <Person 
              // Now that we used typescript to enforce types in the person component,
              // it will literally crash if you don't have the right type. 
              name="Keaton"
              email="keaton.ramey@gmail.com"
              age={21}
              isMarried={false}
              // You can't put a list. This is where type safety comes in
              // check out the person component!
              friends={["me", "myself", "i"]}
              // Peep the enum, make sure you import/export correctly.
              country = {Country.American}
      />
    </div>
  );
}

export default App;
