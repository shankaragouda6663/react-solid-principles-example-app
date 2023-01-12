import React, { Fragment } from 'react';
import Admin from './Admin';
import SuperAdmin from './SuperAdmin';


const UserTypeWithOCP = () =>{
  
  const user = {
    name: "Shankar",
    email: "sg@gmail.com",
    type: "admin"
  }
  
  const userByTypes = {
    'admin' : <Admin user={user}/> ,
    'superadmin' : <SuperAdmin user={user}/>
  }
  
  return (
    <Fragment>
        <h4>With OCP</h4>
        {/** 
         * We can use 2 solution:
         * 
         * 1. Higher-order component
         * 2. Component composition
         * It’s better to go the second route whenever possible, 
         * but there can be cases where using a HOC is necessary.
         * 
         */}
        {userByTypes[`${user.type}`]}
    </Fragment>
  )
}

export default UserTypeWithOCP;