import './App.css';
import React,{Component} from 'react'
import Home from './components/APICALL' 
import UserApiCall from './components/USERAPICALL'
import UserHook from './components/apicallusinghook'

class App extends Component 
{
  render()
  {
    return(
      <div className="App">
            <UserApiCall/>
            <UserHook/>
      </div>
    )
  }
}

export default App;
