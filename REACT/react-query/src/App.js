import './App.css';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, createContext } from 'react';
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

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


  WHAT IS REACT QUERY??

  -> Can't we just use useEffect/fetching?

  Well, to do that, we have to remove strict mode. It's not an ideal way of getting data from APIs. 
  Its there to enforce best practices...
  --> We really shouldn't do this, we're gonna learn a better way now
  --> Query facilitates data queries much better, makes all of it easier, this is the way

  Have to install: npm install @tanstack/react-query

  You wanna set up the query at the highest level you wanna make the request in.
  Gonna put it in app because we want access everywhere

  */

  const [username, setUsername] = useState("Keaton");

  // You can pass a client object, but that's more advanced
  // Using this client, we can frame the components who will have access like we did w router
  const client = new QueryClient();

  //When you make that provider (routes thing) below, you have to specify what you're gonna provide to everything inside.
  
  return (
    <div className="App">
    <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </div>
  );

  // What passing data looked like before:
  // <Route path="/" element={<Home username={username} setUsername={setUsername}/>} />
}

export default App;
