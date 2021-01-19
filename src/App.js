import './App.css';
import React, { Component } from 'react';
import MovieGrid from "./Components/MovieGrid";
import EmployeeGrid from "./Components/EmployeeGrid";
import {Route,Redirect} from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar";


class App extends Component {
 
  state = { 
    
    

   }

  
  render() { 
    return ( 
      <React.Fragment> 
<NavBar/>
<main className="container"> 
    <Route path="/Movies" render={props => <MovieGrid setClass="table table-bordered" {...props} />}/>
    <Route path="/Employees" render={props => <EmployeeGrid setClass="table table-bordered" {...props} />}/>
    <Redirect from="/" to="/Movies"/>
    
   </main>
   
      </React.Fragment>
      
   
    )
}
   
}
 

export default App;
