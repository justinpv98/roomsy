import React from "react";
import styles from "./Category.module.scss";

import cx from "classnames";

function Category({data}) {
 
  const {src, alt, heading, stays} = data;
  return (
    <article className={styles.card}> 
      <img
        src={src}
        className={styles.cardImage}
        alt={alt}
      />
      <div className={styles.contentContainer}>
        <h3 className={cx(styles.heading, "h5")}>{heading}</h3>
        <p className={styles.stays}>{stays} stays</p>
      </div>
    </article>
  );
}

export default Category;
