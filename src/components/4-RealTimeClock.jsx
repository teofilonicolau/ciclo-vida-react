import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente.
    }, []);

    return <h1>Current Time: {time}</h1>;
};

export default RealTimeClock;
