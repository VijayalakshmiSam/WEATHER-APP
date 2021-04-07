import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import PostList from './components/postlist';
//import PostForm from './components/postform';
import PostApiCall from './components/postapicall'
import Home from './components/APICALL' 
import Home1 from './components/fetchweather'

class App extends Component 
{
  render()
  {
    return(
      <div className="App">
          <PostApiCall/> 
        {/* <PostList/> */}
        {/* <Home/> */}
      </div>
    )
  }
}

export default App;
