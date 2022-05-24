import React from 'react';

const Users = ({user,index}) => {

    const {email,name,phone} = user;
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    );
};

export default Users;