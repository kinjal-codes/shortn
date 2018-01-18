import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.component";
import ListUrl from "./components/ListUrl.component";
import EditUrl from "./components/EditUrl.component";
import CreateUrl from "./components/CreateUrl.component";
import Signup from "./components/Signup.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={CreateUrl} />
      </div>
    </Router>
  );
}

export default App;