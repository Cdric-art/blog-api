import React from 'react';

const FlashMessage = ({ message, type }) => {
    return (
        <div className={`flash ${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default FlashMessage;
