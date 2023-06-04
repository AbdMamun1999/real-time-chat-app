import React from "react";
import SearchBox from "../searchBox/SearchBox";
import AddContact from "./AddContact";
import ChatUsers from "../items/ChatUsers";

const Sidebar = () => {
  return (
    <section className="px-3 py-3 h-[calc(100vh_-_66px)]">
      <div>
        <SearchBox />
      </div>
      <div className="mt-3">
        <AddContact />
      </div>
      <div>
        <ChatUsers />
      </div>
    </section>
  );
};

export default Sidebar;
