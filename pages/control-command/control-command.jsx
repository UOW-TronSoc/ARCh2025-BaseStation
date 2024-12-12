import React from "react";
import "./styles.css";

const ControlCommand = () => {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="logo">TronSoc</div>
        <nav className="navbar">
          <a href="index.html">Home</a>
          <a href="#">Control Pages</a>
          <a href="#">Telemetry</a>
          <a href="#">About</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main-container">
        {/* Kanga Connection */}
        <div className="kanga-connection">
          <span className="material-symbols-outlined" id="kanga-icon">
            smart_toy
          </span>
          <h2 className="device-name">Kanga</h2>
          <div className="connect-buttons">
            <button className="connect-btn">Connected</button>
            <button className="disconnect-btn">Disconnect</button>
          </div>
        </div>

        <div className="middle-section">
          {/* Left Column */}
          <div className="left-column">
            {/* Logs Section */}
            <div className="log-history">
              <h3>LOGS</h3>
              <div className="log-content">
                <p>14:22 / 27.07.2020 / connected to RoboDoc</p>
                <p>14:23 / 27.07.2020 / search for optimal path for destination</p>
              </div>
            </div>

            {/* Natural Language Interface */}
            <div className="nli-section">
              <h3>Natural Language Interface</h3>
              <div className="nli-content">
                <p className="user-command">
                  <span>/YOU:</span> Show me obstacle avoidance model.
                </p>
                <p className="response">Creating cognitive map...</p>
                <p className="user-command">
                  <span>/YOU:</span> Show me extensions of executive mode.
                </p>
              </div>
              <div className="nli-input">
                <input type="text" placeholder="Enter command..." />
                <button className="send-button">↩</button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Map Section */}
            <div className="map">
              <p>Map</p>
            </div>

            {/* Control Panel Section */}
            <div className="control-panel">
              <select>
                <option>Choose an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="control-buttons">
                <button className="start-btn">Start</button>
                <button className="stop-btn">Stop</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ControlCommand;
