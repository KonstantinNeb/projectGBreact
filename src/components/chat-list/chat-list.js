import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const chats = [
  {name: 'CHAT-1', id: 'chat1'},
  {name: 'CHAT-2', id: 'chat2'},
  {name: 'CHAT-3', id: 'chat3'},
  {name: 'CHAT-4', id: 'chat4'},
];

const ChatList = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {chats.map((chat) => (
            <ListItem button key={chat.id}>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <Link to={`/git chats/${chat.id}`}>
                <ListItemText primary={chat.name} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

export default ChatList;
