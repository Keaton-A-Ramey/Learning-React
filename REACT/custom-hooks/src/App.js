import './App.css';
import { useToggle } from './useToggle';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cat } from './Components/Cat';
import { useCounter } from './Components/useCounter';

// MAKING OUR OWN HOOKS!
/*
These are all hooks: 
useState
useContext
useEffect

There are a bunch more I haven't used yet...
But we can make our own! 

1 Create a js.file in highest level of component
2 Start with use 
3 Inside component

These hooks we're importing have a bunch of underlying logic.
Hooks allow you to abstract logic. 

Diff between hooks and functions?
--> With hooks we can access a bunch more stuff, like the state or lifecycle of an application. 

*/
function App() {

  // Using these names for the app, abstracting just in the toggle hook.
  const [isVisible, toggle] = useToggle();

  // With custom hooks, we can also just reuse it over and over like with any other hook
  const [isVisible2, toggle2] = useToggle();

  const [number, increment, decrmeent, setZero] = useCounter();

  // We're gonna do an API call with it -- Using hooks is a good way to stay organized.
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  // () => setVisible((prev) => !prev) is what onclick used to be. So much cleaner now!
  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>BOO!</h1>}
      <br></br>
    <button onClick={toggle2}>
      {isVisible2 ? "Hide" : "Show"}
    </button>
    {isVisible2 && <h1>BOO!</h1>}

    <QueryClientProvider client={client}>
      < Cat/>
    </QueryClientProvider>

    <br></br>
    <br></br>
    <br></br>

    <h1>{number}</h1>
    <button onClick={increment}>Add!</button>
    <button onClick={decrmeent}>Subtract!</button>
    <button onClick={setZero}>Reset!</button>

  </div>
  );
}

export default App;
