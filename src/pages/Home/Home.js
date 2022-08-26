import React from "react";
import styles from "./Home.module.scss";
import cx from "classnames";

import categories from "../../constants/categories";
import exploreLocations from "../../constants/explore";

import Hero from "./Hero/Hero";
import Category from "../../components/Category/Category";
import LocationCard from "./LocationCard/LocationCard";
import Tabs from "./Tabs/Tabs";

import maria from "../../assets/maria.webp";
import sam from "../../assets/sam.webp";
import garry from "../../assets/garry.webp";
import natasha from "../../assets/natasha.webp";

import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";

import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <section className={styles.categories}>
        <div className={styles.cardsContainer}>
          {categories.map((category, index) => (
            <Category key={index} data={category} />
          ))}
        </div>
      </section>
      <section className={styles.exploreContainer}>
        <h2 className={styles.sectionTitle}>Explore nearby</h2>
        <ul className={styles.exploreCardsContainer}>
          {exploreLocations.map((location, index) => (
            <LocationCard key={index} data={location} />
          ))}
        </ul>
      </section>
      <section className={styles.complexCTA}>
        <div className={styles.sectionWrapper}>
          <div className={styles.hostContainer}>
            <div className={styles.hostContentContainer}>
              <h2 className={cx("h1", styles.hostHeader)}>Become a Host</h2>
              <p className={styles.hostCopy}>
                Earn extra income and unlock new opportunities by sharing your
                space.
              </p>
              <Button className={styles.hostButton}>Learn more</Button>
            </div>
          </div>
          <div className={styles.imagesContainerWrapper}>
            <div className={styles.leftImagesContainer}>
              <div className={styles.leftImage}>
                <img src={maria} alt="" className={styles.shownImage}></img>
                <div className={styles.nameContainer}>
                  <p className={styles.hostName}>Maria</p>
                  <p className={styles.hostAge}>24 years old</p>
                </div>
              </div>
              <div className={styles.leftImage}>
                <img src={sam} alt="" className={styles.shownImage}></img>
                <div className={styles.nameContainer}>
                  <p className={styles.hostName}>Sam</p>
                  <p className={styles.hostAge}>24 years old</p>
                </div>
              </div>
              <img src={person1} alt="" className={styles.unshownImage}></img>
              <img src={person2} alt="" className={styles.unshownImage}></img>
            </div>
            <div className={styles.rightImagesContainer}>
              <div className={styles.rightImage}>
                <img src={garry} alt="" className={styles.shownImage}></img>
                <div className={styles.nameContainer}>
                  <p className={styles.hostName}>Garry</p>
                  <p className={styles.hostAge}>29 years old</p>
                </div>
              </div>
              <div className={styles.rightImage}>
                <img src={natasha} alt="" className={styles.shownImage}></img>
                <div className={styles.nameContainer}>
                  <p className={styles.hostName}>Natasha</p>
                  <p className={styles.hostAge}>21 years old</p>
                </div>
              </div>
              <img src={person3} alt="" className={styles.unshownImage}></img>
              <img src={person4} alt="" className={styles.unshownImage}></img>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.getAway}>
        <h2 className={styles.sectionTitle}>Inspiration for future getaways</h2>
        <Tabs />
      </section>
    </main>
  );
}
