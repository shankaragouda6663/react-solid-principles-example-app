import React, { Fragment } from 'react';

const UserTypeWithoutOCP = ({user}) => {

    return (
        <Fragment>
            <h1>Open/Closed Principle (OCP)</h1>
            <h3>Make big components from lots of smaller ones - should be opened for extension and closed for modification</h3>
            <h4>Without OCP</h4>
             {
             /** As the number of user types we need add another type of user
            *   This is a clear violation of the Open-Closed principle because 
            *   we are not allowed to alter the code inside the User component.
            */}
            <div> Name: {user.name}</div>
            <div> Email: {user.email}</div>
            {
                user.type === 'SUPER_ADMIN' &&
                <div> Details about super admin</div>
            }
            {
                user.type === 'ADMIN' &&
                <div> Details about admin</div>
            }
        </Fragment>
    )
}

export default UserTypeWithoutOCP;