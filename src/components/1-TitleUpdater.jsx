import React, { useState, useEffect } from "react";

const TitleUpdater = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        document.title = `Number: ${number}`;
    }, [number]); // Atualiza o título sempre que "number" muda.

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={() => setNumber(number - 1)}>Decrement</button>
        </div>
    );
};

export default TitleUpdater;
