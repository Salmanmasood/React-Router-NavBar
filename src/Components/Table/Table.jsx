import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import React, { Component } from 'react';
import { paginate } from "../Pagination/Paginate";
import Pagination from "../Pagination/Pagination";
import _ from "lodash";


class Table extends Component {
    state = {  
          sortColumn:{path:'title',order:'asc'},
          pageSize: 2,
          currentPage: 1

             }


  handlePageChange = (page) => {
          
                this.setState({
                  currentPage: page
                })
            
              }
              

    handleSort=(sortColumn)=>
    {
    this.setState({sortColumn});
    }
  

    getPagedData=()=>{
        const { data} = this.props;
        const{sortColumn,currentPage,pageSize}=this.state;
    
      const sorted= _.orderBy(data,[sortColumn.path],[sortColumn.order]);
      const paginatedData = paginate(sorted, currentPage, pageSize);
  
      return {totalCount:sorted.length,data:paginatedData};
    }
  

    render() { 

       const {columns,setClass}=this.props;

       const {sortColumn,currentPage,pageSize}=this.state;
       const {totalCount,data}=this.getPagedData();
      
        return (  
        <div>
 <table className={setClass}>
            <TableHeader sortColumn={sortColumn} onSort={this.handleSort} columns={columns}/>
            <TableBody columns={columns} data={data}/>
        
         
          </table> 
<Pagination currentPage={currentPage} itemCount={totalCount} pageSize={pageSize} onPageChange={this.handlePageChange} />
       
        </div>
       


          );
    }
}
 
export default Table ;




     