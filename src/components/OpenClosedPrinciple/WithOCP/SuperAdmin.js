import React from 'react';
import User from "./User";

const SuperAdmin = ({user}) => {

    return <>
        <User user={user} />
        <div> This is super admin user details</div>
    </>
}

export default SuperAdmin;