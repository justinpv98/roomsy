import React from "react";
import styles from "./Hero.module.scss";

import cx from "classnames";
import cloudinaryUrl from "../../../config/cloudinary";

import Button from "../../../components/Button/Button";
import Icon from "../../../components/Icon/Icon";

function Hero() {
  return (
    <section className={styles.container}>
      <img
      className={styles.background}
        src={
          cloudinaryUrl + "c_fill,q_70,f_auto,w_1200/roomy/hero_q1hqog.webp"
        }
        alt=""
      />
      <div className={styles.content}>
        <button className={styles.leftArrow}><Icon size="20" icon="chevronLeft" /></button>
        <div className={styles.copy}>
          <h1 className={cx("display", styles.heading)}>
            The Greatest Outdoors
          </h1>
          <p className={cx("h4", styles.subheading)}>
            Wishlists curated by Roomsy
          </p>
          <Button variant="secondary">Get Inspired</Button>
        </div>
          <form className={styles.form}>
            <div>
              <label htmlFor="location" className={styles.label}>Location</label>
              <input type="text" id="location" placeholder="Where are you going?" className={styles.input} />
            </div>
            <div>
              <label htmlFor="check-in" className={styles.label}>Check In</label>
              <input type="text" id="check-in" placeholder="Add dates" className={styles.input} />
            </div>
            <div>
              <label htmlFor="check-out" className={styles.label}>Check Out</label>
              <input type="text" id="check-out" placeholder="Add dates" className={styles.input} />
            </div>
            <div>
              <label htmlFor="guests" className={styles.label}>Guests</label>
              <input type="text" id="guests" placeholder="Number of guests" className={styles.input} />
            </div>
          </form>
        <button className={styles.rightArrow}><Icon  size="20" icon="chevronRight" /></button>
      </div>
    </section>
  );
}

export default Hero;
