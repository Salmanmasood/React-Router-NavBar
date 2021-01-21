import React from 'react';

  const EmployeeForm=({match})=>{

    return (<h1>Employee Id:{match.params.id}  </h1>);
};

export default EmployeeForm;
