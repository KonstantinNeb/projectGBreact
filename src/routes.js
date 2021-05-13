import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./components";
import ChatList from "./components/chat-list";
import Header from "./components/header";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/chats/:chatId" exact>
          <ChatList />
        </Route>
        <Route path="/profile" exact>
          <Header />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
