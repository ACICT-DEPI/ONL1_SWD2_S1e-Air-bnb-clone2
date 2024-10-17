import React from 'react';

const Toast = ({ message }) => {
    return (
        <div
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg transition-opacity duration-300"
            style={{ opacity: message ? 1 : 0 }}
        >
            {message}

        </div>
    );
};

export default Toast;
