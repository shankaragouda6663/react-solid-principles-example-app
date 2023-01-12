import React from 'react';
import User from "./User";

const Admin = ({user}) => {

    return <>
        <User user={user} />
        <div> This is admin user details</div>
    </>
}

export default Admin;