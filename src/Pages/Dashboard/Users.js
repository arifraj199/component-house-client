import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
const Users = ({user,index,refetch}) => {

    const {email,name,phone,role} = user;

    const makeAdmin = () =>{
      fetch(`http://localhost:5000/user/admin/${email}`,{
        method:"PUT",
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res=>{
        if(res.status === 403){
          toast.error('Failed to make an admin')
        }
        return res.json()
      })
      .then(data=>{
        if(data.modifiedCount > 0){
          refetch();
          toast.success('Successfully made an admin');
        }
      })
    }
    return (
        <tr className='text-center'>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{
          role !== 'admin' &&
          <button onClick={makeAdmin} class="btn btn-sm bg-green-800 text-white border-0">Make Admin</button>
          }</td>
        <td><button class="btn btn-sm bg-red-800 text-white border-0"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
      </tr>
    );
};

export default Users;