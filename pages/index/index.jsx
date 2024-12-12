import React from "react";
import "./styles.css";

const Home = () => {
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
        {/* Kanga Connections Section */}
        <div className="kanga-connection">
          <span className="material-symbols-outlined" id="kanga-icon">
            smart_toy
          </span>
          <h2 className="device-name">Kanga</h2>
          <div className="connect-buttons">
            <button className="connect-btn">Connected</button>
            <button className="disconnect-btn">Disconnect</button>
          </div>
          <button className="elipsis-btn">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>

        {/* Middle Section */}
        <div className="middle-section">
          <div className="left-column">
            {/* Device Details Section */}
            <div className="device-details">
              <p>Device Details</p>
              <div className="device-data">
                <div className="data-item">
                  <p className="data-value">85%</p>
                  <p className="data-desc">BATTERY</p>
                </div>
                <div className="data-item">
                  <p className="data-value">data</p>
                  <p className="data-desc">DESCRIPTION</p>
                </div>
                <div className="data-item">
                  <p className="data-value">data</p>
                  <p className="data-desc">DESCRIPTION</p>
                </div>
              </div>
            </div>

            {/* Quick Overview Section */}
            <div className="quick-overview">
              <h3>Quick Overview</h3>
              <div className="function-grid">
                {[...Array(6)].map((_, i) => (
                  <div className="function-card" key={i}>
                    <p>Function</p>
                    <p className="percentage">{[15, 63, 41][i % 3]}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Robot Specifications */}
          <aside className="robot-spec">
            <h3>Robo Spec</h3>
            <ul>
              {[
                { icon: "precision_manufacturing", name: "ARM", pcs: "2 pcs", desc: "Robotic Arm" },
                { icon: "search_hands_free", name: "Motor 1", pcs: "2 pcs", desc: "Wheels" },
                { icon: "science", name: "Science Sensor", pcs: "1 pcs", desc: "Sensor" },
                { icon: "camera", name: "Front Camera", pcs: "1 pcs", desc: "Sony 24Px" },
                { icon: "camera", name: "Rare Camera", pcs: "1 pcs", desc: "Sony 98Px" },
              ].map((spec, i) => (
                <li key={i}>
                  <span className="material-symbols-outlined" id="spec-icon">
                    {spec.icon}
                  </span>
                  <span>{spec.name}</span>
                  <span id="pcs">{spec.pcs}</span>
                  <p>{spec.desc}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Home;
