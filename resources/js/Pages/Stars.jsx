
import React from 'react';

const Stars = ({ filled, onClick }) => {
    return (
        <span onClick={onClick} className={`cursor-pointer ${filled ? 'text-yellow-500' : 'text-[#005546]'}`}>
            ★
        </span>
    );
};

export default Stars;
