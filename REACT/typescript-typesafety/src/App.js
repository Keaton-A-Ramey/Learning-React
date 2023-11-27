import './App.css';
import { Person } from './Components/Person';

function App() {

  /*
    WE ARE USING A TYPE SCRIPT IN A NEW PROJECT
  */

  // You don't have to declare it as a string...
  const name = "Keaton"
  
  return (
    <div className="App">
      <Person 
        name={name}
        email="keaton.ramey@gmail.com"
        age={21}
        isMarried={false}
        friends={["me", "myself", "i"]}
      />
    </div>
  );
}

export default App;
