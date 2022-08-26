import React from "react";
import styles from "./LocationCard.module.scss";

function LocationCard({data}) {
  return (
    <li className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img src={data.src} alt="" className={styles.image}></img>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeading}>{data.city}</div>
        <div className={styles.hoursAway}>{data.distance}</div>
      </div>
    </li>
  );
}

export default LocationCard;
