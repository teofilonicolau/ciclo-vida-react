import React, { useState } from "react";

const LimitedCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {count === 10 && <p>Maximum limit reached!</p>}
        </div>
    );
};

export default LimitedCounter;
