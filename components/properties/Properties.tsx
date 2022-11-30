import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProperties } from "../../app/propertySlice/propertySlice";
import { ModelForm } from "./ModelForm";
import PropertyListItem from "./PropertyListItem";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const Properties = () => {
  const [modelEnabled, setModelEnabled] = useState(false);
  const properties = useAppSelector(selectProperties);

  const modelClosingHandler = () => {
    setModelEnabled(false);
  };
  const modelOpenHandler = (): void => {
    setModelEnabled(true);
  };
  return (
    <div>
      <ModelForm enabled={modelEnabled} handleClose={modelClosingHandler} />
      <List>
        <ListItem>
          <ListItemText>Properties</ListItemText>
        </ListItem>
        {properties.map((property, index) =>
          <PropertyListItem key={index} property={property} />
        )}
        <ListItem>
          <ListItemButton onClick={modelOpenHandler}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>Add Property</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Properties;
