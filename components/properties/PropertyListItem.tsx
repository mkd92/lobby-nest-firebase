import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { focusProperty } from "../../app/propertySlice/propertySlice";

const PropertyListItem = ({ property }: { property: any }) => {
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    dispatch(focusProperty(property.propId));
  };
  return (
    <ListItem>
      <ListItemButton onClick={onClickHandler}>
        <ListItemText>
          {property.propName}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default PropertyListItem;
