import React, { Component } from 'react';
import Table from "./Table/Table";


class EmployeeGrid extends Component {

state={
 
    
    data : [
        {
          _id: "1",
          name: "Salman Masood",
          department: "Software-IT",
          salary: 150000,
          Date: "2018-01-03T19:04:28.809Z"
        },
        {
            _id: "2",
            name: "Ali",
            department: "Software-IT",
            salary: 130000,
            Date: "2018-01-03T19:04:28.809Z"
          },
          {
            _id: "3",
            name: "Masood Ahmed",
            department: "Accounts",
            salary: 110000,
            Date: "2006-01-03T19:04:28.809Z"
          },
          {
            _id: "4",
            name: "Sami Mukhtar",
            department: "Marketing",
            salary: 100000,
            Date: "2018-01-03T19:04:28.809Z"
          }
          

      ],
      columns:[
        {id:1,title:"Id",path:"_id"},
        {id:2,title:"Name",path:"name"},
        {id:3,title:"Department",path:"department"},
        {id:4,title:"Salary",path:"salary"},
        {id:6,path:"Delete",content:employee=>(<button className="btn btn-sm btn-danger" onClick={() => this .handleDelete(employee)}>x</button> )}
        ]
}

  
        handleDelete = (record) => {
            //own custom logic...like ajax calls to delete data.......
            const data = this.state.data.filter(x => x._id !== record._id);
            this.setState({ data });
          }
        
         
          

         

  render(){
    const{data,columns}=this.state;
    
    const {setClass}=this.props;

    return ( 
      <div className="container">
  <Table setClass={setClass}  data={data} columns={columns}/>
  
      </div>
    
      );
}
}
export default EmployeeGrid;

