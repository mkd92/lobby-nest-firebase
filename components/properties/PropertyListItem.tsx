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
import { QueryDocumentSnapshot } from "firebase/firestore";

const PropertyListItem = ({
  property
}: {
  property: QueryDocumentSnapshot;
}) => {
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    dispatch(focusProperty(property.id));
  };
  return (
    <ListItem>
      <ListItemButton onClick={onClickHandler}>
        <ListItemText>
          {property.data().propName}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default PropertyListItem;
