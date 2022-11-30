import React from "react";
import styles from "../../styles/Properties.module.scss";
const PropertyListItem = ({ property }: { property: any }) => {
  return (
    <li className={styles.propertyListItem}>
      {property.propName}
    </li>
  );
};

export default PropertyListItem;
