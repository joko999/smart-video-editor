import React, { useState } from 'react';

const OrderSelector = () => {
    const [isRandom, setIsRandom] = useState(false);

    const handleToggle = () => {
        setIsRandom(prevState => !prevState);
    };

    return (
        <div>
            <h2>Select Order</h2>
            <button onClick={handleToggle}>
                {isRandom ? 'Switch to Sequential' : 'Switch to Random'}
            </button>
            <p>Current Order: {isRandom ? 'Random' : 'Sequential'}</p>
        </div>
    );
};

export default OrderSelector;