import React from "react";
import imgOne from "../../assets/mamun.jpg";

const ChatUser = () => {
  return (
    <div class=" px-3 py-3  flex items-center hover:bg-gray-100 cursor-pointer border-t border-b">
      <div>
        <img class="h-12 w-12 rounded-full border-2" src={imgOne} />
      </div>
      <div class="ml-4 flex-1">
        <div class="flex items-bottom justify-between">
          <p class="text-gray-950 font-semibold text-sm">
            Arnold Schwarzenegger
          </p>
          <p class=" text-gray-950  text-sm text-right">12:45 pm</p>
        </div>
        <p class="text-grey-950 mt-1 text-sm">I'll be back</p>
      </div>
    </div>
  );
};

export default ChatUser;
