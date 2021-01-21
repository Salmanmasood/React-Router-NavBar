import './App.css';
import React, { Component } from 'react';
import MovieGrid from "./Components/MovieGrid";
import EmployeeGrid from "./Components/EmployeeGrid";
import {Route,Redirect,Switch} from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar";
import EmployeeForm from "./Components/EmployeeForm";
import NotFound  from "./Components/NotFound";


class App extends Component {
 
  state = { 
    
    

   }

  
  render() { 
    return ( 
      <React.Fragment> 
<NavBar/>
<main className="container"> 
 <Switch>
    <Route path="/Movies" render={props => <MovieGrid setClass="table table-bordered" {...props} />}/>
    <Route path="/Employees"  render={props => <EmployeeGrid setClass="table table-bordered" {...props} />}/>
    <Route path="/Employee/:id"  component={EmployeeForm}/>
    <Route path="/not-found" component={NotFound} />
    <Redirect from="/" exact to="/Movies" />
    <Redirect to="/not-found" />
   
    
    </Switch> 
   </main>
   
      </React.Fragment>
      
   
    )
}
   
}
 

export default App;
