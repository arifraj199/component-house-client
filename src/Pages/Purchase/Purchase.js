import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Purchase Id:{id}</h2>
        </div>
    );
};

export default Purchase;