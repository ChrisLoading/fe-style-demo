import { useState } from "react";

export default function ProfileCard() {
    const [online, setOnline] = useState(true);

    return (
        <div className="pc-card">
            <div className="pc-avatar">
                <div>
                    <h3 className="pc-title">John Doe</h3>
                    <p className="pc-subtitle">MIS</p>

                    <button className="pc-btn" onClick={() => setOnline(!online)}>
                        Toggle Online
                    </button>
                </div>
            </div>
            
            <span className={`pc-badge ${online ? "online" : "offline"}`}>
                {online ? "Online" : "Offline"}
            </span>
        </div>
    );
}