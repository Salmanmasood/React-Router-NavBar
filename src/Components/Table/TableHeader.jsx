import React, { Component } from 'react';

class  TableHeader extends Component {


    raiseSort=(path)=>{
        const sortColumn={...this.props.sortColumn};
    if(sortColumn.path===path){
      sortColumn.order=(sortColumn.order==="asc")?"desc":"asc";
    }
    else{
      sortColumn.path=path;
      sortColumn.order="asc";
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon=(column)=>{
    const{sortColumn}=this.props;
    if (column.path!==sortColumn.path) return null;
    if(sortColumn.order==="asc") return <i className="fa fa-sort-asc"/>;
    return <i className="fa fa-sort-desc"/>
  }


    render() { 
      console.log(this.props.columns);
        return (
            <thead>

                <tr>
                    {this.props.columns.map(column=>
                   (<th key={column.id} onClick={()=>this.raiseSort(column.path)}>
                    {column.title} {this.renderSortIcon(column)}
                    </th>))}
                </tr>
            </thead>
          );
    }
}
 
export default TableHeader;