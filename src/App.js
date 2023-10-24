import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import {ChannelListContainer, ChannelContainer, Auth} from './components'
import "./App.css"

//to setup chat, we need api key
const apiKey = "8ymsr2ghbgbh";

//instance of stream chat
const client = StreamChat.getInstance(apiKey);

//will be available if we have actually logged in
const authToken = false;

function App() {

  //if user is not logged in then only we will render the auth
  if(!authToken){
    return <Auth />
  }

  

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
