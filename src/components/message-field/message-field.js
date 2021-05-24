import React from "react";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "../../../build/bundle";
import {addMessageWithThunk} from "../../store/actions/action-creators/messages";
import {useParams} from "react-router-dom";
import ChatList from "../chat-list";
import Message from "../message";
import {AUTHORS} from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    width: `100%`,
  },
}));

const MessageField = () => {
  const classes = useStyles();

  const messages = useSelector(state => state.messages.messagesList);
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddMessage({author: AUTHORS.HUMAN, text });
    setText('');
  }

  const handleAddMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithThunk(newMessage, chatId));
    },
    [chatId, dispatch]
  );

  return (
    <div>
      <div className="message-field">
        <ChatList />
        <div>
          {messages[chatId].map((message, i) => (
            <Message text={message.text} author={message.author} key={i} />
          ))}

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <form onSubmit={handleSubmit}>
              <TextField
                label="Введите сообщение"
                variant="outlined"
                name="text"
                onChange={handleChange}
                value={text}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SendIcon />}
                onClick={handleAddMessage}
                type="submit"
              >
                Отправить
              </Button>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

export default MessageField;
