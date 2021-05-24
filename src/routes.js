import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ChatList from "./components/chat-list";
import Header from "./components/header";
import Profile from "./components/profile";
import MessageField from "./components/message-field";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <ChatList />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/chats/:chatId?">
          <MessageField />
        </Route>

        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
