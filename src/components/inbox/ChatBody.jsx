import React from "react";
import ChatHeader from "./ChatHeader";
import SendBox from "./SendBox";
import Messages from "./Messages";

const Chatbody = () => {
  return (
    <div className="grid conversation-row-grid ">
      <ChatHeader />
      <Messages />
      <SendBox />
    </div>
  );
};

export default Chatbody;
