import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import UserApi from './components/UserApi';



class App extends React.Component {
 
 
  render() {
    return (
      <div className="app">
        <h1 className="title">Look for People on Github!</h1>
        <UserApi />
      </div>
    )
  }


}

export default App;
