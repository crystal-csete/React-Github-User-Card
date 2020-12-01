import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import UserApi from './components/UserApi';



class App extends React.Component {
 
 
  render() {
    return (
      <div>
        <h1>Look for People on Github!</h1>
        <UserApi />
      </div>
    )
  }


}

export default App;
