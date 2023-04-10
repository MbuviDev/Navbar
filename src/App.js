import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import Parcel from "./components/Parcel";
import Loading from "./components/Loading";
import Outboundparcel from "./components/Outboundparcel";
import Expenses from "./components/Expenses";


function App() {
  return (
    <Router>
    <div class="h-screen bg-gray-300">
      {/* <Heading /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Parcel</Link>
          </li>
          <li>
            <Link to="/outboundparcel">Outbound Parcel</Link>
          </li>
          <li>
            <Link to="/loading">Loading</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route exact path="/" component={Parcel}/>
      <Route path ="/outboundparcel" component={Outboundparcel} />
      <Route path ="/loading" component={Loading} />
      <Route path ="/expenses" component={Expenses} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
