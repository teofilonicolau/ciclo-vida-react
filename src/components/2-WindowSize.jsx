import React, { useState, useEffect } from "react";

const WindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize); // Adiciona o listener.

        return () => {
            window.removeEventListener("resize", handleResize); // Remove o listener.
        };
    }, []);

    return <h1>Window Width: {width}px</h1>;
};

export default WindowSize;
