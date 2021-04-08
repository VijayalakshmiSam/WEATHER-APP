import './App.css';
import React,{Component} from 'react'
import Home from './components/APICALL' 
import Home2 from './components/USERAPICALL'

class App extends Component 
{
  render()
  {
    return(
      <div className="App">
            <Home2/>
      </div>
    )
  }
}

export default App;
