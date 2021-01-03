import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import UserApi from "./components/UserApi";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">Find Github Users</h1>
        <Navbar />
        <UserApi />
        <Footer />
      </div>
    );
  }
}

export default App;
