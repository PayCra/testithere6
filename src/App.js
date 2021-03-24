import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <svg viewBox="-15 -15 130 130" className="svg">
                <defs>
                    <filter id="shadow">
                        <feDropShadow
                            dx="0"
                            dy="0"
                            stdDeviation="5"
                            floodColor="#000000"
                            floodOpacity="3"
                        />
                    </filter>
                </defs>
                <rect className="shapeSize shapeColor" filter="url(#shadow)"/>
                {/*<rect className="shapeSize shapeColor"/>*/}
            </svg>
        </div>
    );
}

export default App;
