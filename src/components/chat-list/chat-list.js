import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import {Link} from 'react-router-dom';
import {Button, TextField} from "@material-ui/core";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import {useDispatch, useSelector} from "react-redux";
import {addChat} from "../../store/actions/action-creators/chats";
import { v4 as uuidv4 } from 'uuid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  button: {
    margin: theme.spacing(1),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const ChatList = () => {
  const chats = useSelector(state => state.chatsState.chatList);

  console.log(chats);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddChatClick = () => {
    const chatId = uuidv4();
    if (value) {
      dispatch(addChat({name: value, id: chatId}));
      setValue("");
    }
  };

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
        <TextField
          value={value}
          onChange={handleChange}
          variant="outlined"
          name="text"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<GroupAddIcon />}
          onClick={handleAddChatClick}
        >
          Добавить чат
        </Button>
        <Divider />
      </Drawer>
    </div>
  );
}

export default ChatList;
