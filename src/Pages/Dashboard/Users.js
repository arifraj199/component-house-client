import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Users = ({user,index}) => {

    const {email,name,phone} = user;
    return (
        <tr className='text-center'>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td><button class="btn btn-sm bg-green-800 text-white border-0">Make Admin</button></td>
        <td><button class="btn btn-sm bg-red-800 text-white border-0"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
      </tr>
    );
};

export default Users;