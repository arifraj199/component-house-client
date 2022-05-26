import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='w-1/2 mx-auto mb-6'>
            <img className='w-full' src="https://i.ibb.co/ZB9Y67p/2704891.jpg" alt="not_found" />
            <button onClick={()=>navigate('/')} className='btn btn-success'>Back To Homepage</button>
        </div>
    );
};

export default NotFound;