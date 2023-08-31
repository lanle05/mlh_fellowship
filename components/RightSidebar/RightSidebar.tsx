import React from "react";
import Image from "next/image";
import { chat_button, chat_icon, youngpeople2 } from "../../constant/images";
import { avatars } from "../../constant/data";
function RightSidebar() {
  return (
    <div className="right-sidebar-container">
      <div className="chat-button">
        <Image src={chat_button} alt="chat button" />
      </div>
      <div>
        {avatars.map((avatar, index) => (
          <div key={`avatar${index}`} className="friend-img">
            <Image alt="avatar" src={avatar.image} width={"50px"} height={"46px"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
