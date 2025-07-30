
import React, { useState } from "react";
import "/workspaces/semaforo-aaron/src/styles/index.css";

const Semaforo = () => {
    const [color, setColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);

    const toggleColor = () => {
        const colors = showPurple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];
        const currentIndex = colors.indexOf(color);
        const nextColor = colors[(currentIndex + 1) % colors.length];
        setColor(nextColor);
    };

    return (
        <div className="traffic-container">
            <div className="traffic-body">
                <div
                    className={`light red ${color === "red" ? "glow" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`light yellow ${color === "yellow" ? "glow" : ""}`}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className={`light green ${color === "green" ? "glow" : ""}`}
                    onClick={() => setColor("green")}
                ></div>
                {showPurple && (
                    <div
                        className={`light purple ${color === "purple" ? "glow" : ""}`}
                        onClick={() => setColor("purple")}
                    ></div>
                )}
            </div>
            <div>
                <button onClick={toggleColor}>🔁 Alternar color</button>
                <button onClick={() => setShowPurple(!showPurple)}>🎨 Añadir púrpura</button>
            </div>

        </div>
    );
};

export default Semaforo;
