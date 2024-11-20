import React, { useState, useEffect } from "react";

const PersistentCounter = () => {
    const [count, setCount] = useState(() => {
        return parseInt(localStorage.getItem("counter") || 0);
    });

    useEffect(() => {
        localStorage.setItem("counter", count); // Atualiza o Local Storage.
    }, [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default PersistentCounter;
