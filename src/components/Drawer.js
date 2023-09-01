import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <ArrowForwardIosIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem button key="Inicio">
              <Link to="/">
                <ListItemText primary="Inicio (navega a dashboard)" />
              </Link>
            </ListItem>
            <ListItem button key="Paginas">
              <ListItemText primary="Paginas" />
              <List>
                <ListItem button key="Todo">
                  <Link to="/todo">
                    <ListItemText primary="Todo" />
                  </Link>
                </ListItem>
                <ListItem button key="Fetchlist">
                  <Link to="/fetchlist">
                    <ListItemText primary="Fetchlist" />
                  </Link>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
