import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import styles from "./Tabs.module.scss";

import locations from "../../../constants/tabContent";
import { randomizeArray } from "../../../utils/arrayUtils";

function Tabs() {
  return (
    <ReactTabs>
      <TabList> 
        <Tab>Art and culture destinations</Tab>
        <Tab>Outdoor adventure destinations</Tab>
        <Tab>Mountain cabin destinations</Tab>
        <Tab>Beach destinations</Tab>
      </TabList>
      <TabPanel>
        {locations.map((location, index) => {
          return (
            <div className={styles.locationContainer} key={index + 100}>
              <h4 className={styles.city}>{location.city}</h4>
              <p className={styles.region}>{location.region}</p>
            </div>
          );
        })}
      </TabPanel>
      <TabPanel>
        {randomizeArray(locations).map((location, index) => {
          return (
            <div className={styles.locationContainer} key={index + 200}>
              <h4 className={styles.city}>{location.city}</h4>
              <p className={styles.region}>{location.region}</p>
            </div>
          );
        })}
      </TabPanel>
      <TabPanel>
        {randomizeArray(locations).map((location, index) => {
          return (
            <div className={styles.locationContainer} key={index + 300}>
              <h4 className={styles.city}>{location.city}</h4>
              <p className={styles.region}>{location.region}</p>
            </div>
          );
        })}
      </TabPanel>

      <TabPanel>
        {randomizeArray(locations).map((location, index) => {
          return (
            <div className={styles.locationContainer} key={index + 400}>
              <h4 className={styles.city}>{location.city}</h4>
              <p className={styles.region}>{location.region}</p>
            </div>
          );
        })}
      </TabPanel>
    </ReactTabs>
  );
}

export default Tabs;
