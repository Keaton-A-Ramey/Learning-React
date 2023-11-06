import './App.css';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  /*
  REACT ROUTER DOM!

  This is how you're gonna get multiple pages
  Different in react because you're using one file

  1. install react-router-dom
  2. Import the components from it at top.
  "Use routes to change specific portion of your website."
  The route is where you're going, the page defines the like URL extension
  The element is the element that goes up at that path.

  import the components, the pages, from other files.

  The * will take you to that element if the page you're on is not defined with a Route.

  Creating a navbar requires you to be in the router. We imported Link from RRD. Example below
  It helps to have a navbar component (Where you import Link!) to import and just put in the router
  */

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
