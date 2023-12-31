import './App.css';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  /*
  PROP DRILLING - the main reason we put effort into state management
  Passing a prop to a component that is not going to be used, but it's purpose is to 
  be passed to another component from there 

  The state is being created in the top component, passed down through middle component to the 
  bottom one

  WE AVOID THIS THROUGH STATE MANAGEMENT

  EXAMPLE:

  const TopComponent = () => {
    const [state, setState] = useState();
    return (
      <div>
        <MiddleComponent state={state} />
      </div>
    );
  }

  const MiddleComponent = () => {
    const [state, setState] = useState();
    return (
      <div>
        <BottomComponent state={state} />
      </div>
    );
  }

  const BottomComponent = () => {
    const [state, setState] = useState();
    return (
      <div>
        {state}
      </div>
    );
  }

  What is createContext?

  --> When you want to have a group of components that have access to the same data, you can create
  a context for that group. You can even have global context

  */

  const [username, setUsername] = useState("Keaton");

  //When you make that provider below, you have to specify what you're gonna provide to everything inside.

  return (
    <div className="App">
    <AppContext.Provider value={{username, setUsername}}>
    <Router> 
        <div>
          <Link to="/"> HOME </Link>
          <Link to="/Menu">MENU </Link>
          <Link to="/Contact">CONTACT</Link>

        </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );

  // What passing data looked like before:
  // <Route path="/" element={<Home username={username} setUsername={setUsername}/>} />
}

export default App;
