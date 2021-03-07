import React from 'react';

const Refresh = () => {
    localStorage.clear();
    sessionStorage.clear();
    return (
        <div>
           {
               alert('All things has been refreshed')
           }
        </div>
    );
};

export default Refresh;