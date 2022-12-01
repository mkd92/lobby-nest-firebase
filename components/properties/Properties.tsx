import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProperties } from "../../app/propertySlice/propertySlice";
import { ModelForm } from "./ModelForm";
import PropertyListItem from "./PropertyListItem";
import { useFetchProperties } from "../../utils/properties/useFetchProperties";
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
  const properties = useFetchProperties();
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
        <ListItem>
          <ListItemButton onClick={modelOpenHandler}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>Add Property</ListItemText>
          </ListItemButton>
        </ListItem>
        {properties.map((property, index) =>
          <PropertyListItem key={index} property={property} />
        )}
      </List>
    </div>
  );
};

export default Properties;
