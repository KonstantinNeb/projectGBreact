import React from "react";
import ChatList from "../chat-list";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../header";
import Message from "../message";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      <Message />
    </div>
  )
}

export default Layout;
