import { useState } from "react";
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

export default function ProfileCard() {
    const [online, setOnline] = useState(true);

    return (
        <div className="pc-card">
            <div className="pc-avatar" style={{ backgroundImage: `url(${reactLogo})` }}></div>
                <div>
                    <h3 className="pc-title">John Doe</h3>
                    <p className="pc-subtitle">Internal Systems / MIS</p>

                    <button className="pc-btn" onClick={() => setOnline(!online)}>
                        Toggle Online
                    </button>
                </div>
            
            <span className={`pc-badge ${online ? "online" : "offline"}`}>
                {online ? "Online" : "Offline"}
            </span>
        </div>
    );
}