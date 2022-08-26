import React from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import styles from "./Footer.module.scss";
import cx from "classnames";

import logo from "../../assets/logo.svg";
import footerLinks from "../../constants/footerLinks";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

function Footer() {
  const isMobile = useMatchMedia("(max-width: 40em)");

  function renderSitemap() {
    if (isMobile) {
      return <Accordion className={styles.accordion}>
        {footerLinks.map((linkList, index) => {
          return (
            <AccordionItem key={index} className={styles.accordionItem} >
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordionHeader}>{linkList.header} <Icon icon="plus" /></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionPanel}>
                {linkList.links.map((link, index) => {
                  return (
                    <li key={index}>
                      <a className={styles.link} href={link.href}>
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>;
    } else {
      return footerLinks.map((linkList, index) => {
        return (
          <ul className={styles.linkList} key={index}>
            <li className={cx("text-small", styles.header)} >
              {linkList.header}
            </li>
            {linkList.links.map((link, linkIndex) => {
              return (
                <li key={linkIndex}>
                  <a className={styles.link} href={link.href}>
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        );
      });
    }
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeader}>
        <div className={styles.emptyBlock}></div>
        <img src={logo} className={styles.logo} alt="" />
        <Button variant="secondary" className={styles.cta}>
          Become A Host
        </Button>
      </div>
      <div className={styles.sitemapContainer}>
        <div className={styles.sitemap}>{renderSitemap()}</div>
      </div>
      <div className={styles.attributionWrapper}>
        <div className={styles.attributionContainer}>
          <small>&copy; 2021 Roomsy, Inc.</small>
          <p className="text-small">Privacy</p>
          <p className="text-small">Terms</p>
          <p className="text-small">Sitemap</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
