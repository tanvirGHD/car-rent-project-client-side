import React from 'react';

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
