import { useState } from "react";
import styles from "./ProfileCard.module.css";  // Importing CSS Module here instead of globally importing in main.jsx (CSS-Module way of styling)

export default function ProfileCardCssModule() {
  const [online, setOnline] = useState(true);

  return (
    <div className={styles.card}>
      <div className={styles.avatar} />
      <div>
        <h3 className={styles.title}>CSS Module</h3>
        <p className={styles.subtitle}>Internal Systems / MIS</p>

        <button className={styles.btn} onClick={() => setOnline(!online)}>
          Toggle Online
        </button>
      </div>

      <span className={`${styles.badge} ${online ? styles.online : styles.offline}`}>
        {online ? "Online" : "Offline"}
      </span>
    </div>
  );
}
