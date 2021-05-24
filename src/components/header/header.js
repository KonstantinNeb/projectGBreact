import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import Profile from "../profile";
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Messenger victory
          </Typography>
        </Toolbar>
      </AppBar>
      <>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </>
      <Profile />
    </div>
  )
}

export default Header;
