import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import "../styling/Navigationtabs.css";

const Navigationtabs = () => {
  return (
    <>
      <List className="list" dense>
        <ListItem className="list-item">
          <ListItemButton className="list-button">
            <ListItemText className="list-text" primary="Personal Info" />
          </ListItemButton>
        </ListItem>
        <ListItem className="list-item">
          <ListItemButton className="list-button">
            <ListItemText className="list-text" primary="Work Experience" />
          </ListItemButton>
        </ListItem>
        <ListItem className="list-item">
          <ListItemButton className="list-button">
            <ListItemText className="list-text" primary="Education" />
          </ListItemButton>
        </ListItem>
        <ListItem className="list-item">
          <ListItemButton className="list-button">
            <ListItemText className="list-text" primary="Key Skills" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default Navigationtabs;
