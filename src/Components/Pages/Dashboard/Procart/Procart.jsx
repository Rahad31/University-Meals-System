import React from 'react';

const Procart = ({jobs}) => {
    const {name,status,email}=jobs;
    return (
      <div>
        <h3>Email: {email}</h3>
        <h3>Name: {name}</h3>
        <h3>Membership : {status}</h3>
      </div>
    );
};

export default Procart;