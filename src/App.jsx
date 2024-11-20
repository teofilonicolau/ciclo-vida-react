import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TitleUpdater from "./components/1-TitleUpdater";
import WindowSize from "./components/2-WindowSize";
import PersistentCounter from "./components/3-PersistentCounter";
import RealTimeClock from "./components/4-RealTimeClock";
import ToggleText from "./components/5-ToggleText";
import LimitedCounter from "./components/6-LimitedCounter";
import "./styles/App.css";

const App = () => {
    return (
        <Router>
            <div className="calculator-container">
                <h1>React Exercises - Calculator Style</h1>
                <div className="menu">
                    <Link to="/title-updater" className="menu-button">Title Updater</Link>
                    <Link to="/window-size" className="menu-button">Window Size</Link>
                    <Link to="/persistent-counter" className="menu-button">Persistent Counter</Link>
                    <Link to="/real-time-clock" className="menu-button">Real Time Clock</Link>
                    <Link to="/toggle-text" className="menu-button">Toggle Text</Link>
                    <Link to="/limited-counter" className="menu-button">Limited Counter</Link>
                </div>

                <Routes>
                    <Route path="/title-updater" element={<TitleUpdater />} />
                    <Route path="/window-size" element={<WindowSize />} />
                    <Route path="/persistent-counter" element={<PersistentCounter />} />
                    <Route path="/real-time-clock" element={<RealTimeClock />} />
                    <Route path="/toggle-text" element={<ToggleText />} />
                    <Route path="/limited-counter" element={<LimitedCounter />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
