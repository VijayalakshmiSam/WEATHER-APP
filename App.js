import './App.css';
import React,{Component} from 'react'
import Home from './components/APICALL' 
import UserApiCall from './components/USERAPICALL'

class App extends Component 
{
  render()
  {
    return(
      <div className="App">
            <UserApiCall/>
      </div>
    )
  }
}

export default App;
