import React from 'react';

const User = ({user}) => {

    return <>
        <div> Name: {user.name}</div>
        <div> Email: {user.email}</div>
    </>
}

export default User;