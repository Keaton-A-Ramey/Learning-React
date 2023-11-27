import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
// Wraps around all components that we want to have access to the states
// By states, we dont mean useState, we're talking about what redux provides. 
import { Provider } from "react-redux";
import { store } from "./Pages/store";

import './App.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/"> Home </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/login"> Login </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
