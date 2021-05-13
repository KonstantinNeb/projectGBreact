import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
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

const MessageField = ({onAddMessage}) => {
  const classes = useStyles();

  const [text, setText] = useState('');

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddMessage({author: AUTHORS.HUMAN, text });
    setText('');
  }

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Введите сообщение"
          variant="outlined"
          name="text"
          onChange={handleChangeText}
          value={text}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<SendIcon />}
          type="submit"
        >
          Отправить
        </Button>
      </form>
      </main>
    </div>
  )
}

export default MessageField;
