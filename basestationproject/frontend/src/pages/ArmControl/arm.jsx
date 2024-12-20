import React, { useEffect, useState } from 'react';
import axios from 'axios;'

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const KangaConnection = () => {
    const sendCommmand = async (commandType) => {
        try {
            const response = await axios.post('https://127.0.0.1:8000/api/command', {
                commandType: commandType,
            });
            console.log(response.data);
        } catch (error) {
            console.error(`Error sending command:`, error);
        }
    };

    return (
        <div className={"kanga-connection"}>
            <span className={"material-symbols-outlined"} id={"kanga-icon"}>smart_toy</span>
            <h2 className={"device-name"}>Kanga</h2>
            <div className={"connect-buttons"}>
                    <button onClick={() => sendCommmand('connect')} className={'connect-btn'}>
                        Connect
                    </button>
                    <button onClick={() => sendCommmand('disconnect')} className={'disconnect-btn'}>
                        Disconnect
                    </button>
            </div>
        </div>
    )
};

const ArrowButtons = () => {
    const sendCommmand = async (direction) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/command`, {
                commandType: 'move',
                value: direction
            });
            console.log(response.data);
            alert('Command sent successfully!');
        } catch (error) {
            console.error(`Error sending command:`, error);
            alert('Failed to send command.');
        }
    };
    return (
        <div className="arrow-buttons">
            <button onClick={() => sendCommmand('left')} className={"arrow"}>&#706;&#707;</button>
            <button onClick={() => sendCommmand('up')} className={"arrow"}>&#708;</button>
            <button onClick={() => sendCommmand('right')} className={"arrow"}>&#707;</button>
            <button onClick={() => sendCommmand('down')} className={"arrow"}>&#709; </button>
        </div>
    );
};

const ManualControl = () => {
    const [arms, setArms] = useState([]);
    useEffect(() => {
        const fetchArms = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/arm-overview/`);
                setArms(response.data.arms);
            } catch (err) {
                console.error(`Error fetching arms: ${err}`)
            }
        };
        fetchArms();
    }, []);

    return (
        <div className="manual-control">
            <h2>Manual Control</h2>
            <div className="dropdown">
                <select>
                    <option>Select Arm</option>
                    {arms.map((arm => (
                        <option key={arm.id} value={arm.id}>
                            {arm.id}</option>
                    )))}
                </select>
            </div>
            <div>
                <input
                    type="text" placeholder="Enter Value"/>
            </div>
            <ArrowButtons/>
            <div className="start-stop">
                <button className="start-btn">Start</button>
                <button className="stop-btn">Stop</button>
            </div>
        </div>
    );
};

const ArmOverview = () => {
    const [arms, setArms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArmOverview = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/arm-overview/`);
                setArms(response.data.arms);
            } catch (err) {
                setError('Failed to fetch arm overview.');
                console.error('Error fetching arm overview:', erro.response ? err.response.data : err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchArmOverview();
    }, []);

    if (loading) {
        return <p>Loading arm overview...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="arm-overview">
            <h2>Arm Overview</h2>
            <div className="map">
                <select>
                    <option>Select Arm</option>
                    {arms.map((arm => (
                        <option key={arm.id} value={arm.id}>
                            {arm.id}</option>
                    )))}
                </select>
            </div>
        </div>
    );
};

const ArmControl = () => {
    return (
        <main className={"main-container"}>
            <KangaConnection/>
            <div className={"middle-section"}>
                <ManualControl/>
                <ArmOverview/>
            </div>
        </main>
    );
};


export default ArmControl;
