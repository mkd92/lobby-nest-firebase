import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

const PropertyListItem = ({ property }: { property: any }) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemText>
          {property.propName}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default PropertyListItem;
