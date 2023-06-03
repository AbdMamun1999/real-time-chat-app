import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideIconBar from "../components/sidebar/SideIconBar";

const Conversation = () => {
  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <div className="h-[100vh] border-2">
            <SideIconBar />
          </div>
        </div>
        <div className="col-span-11 border-2">
          <Navbar />
        </div>
      </div>
    </section>
  );
};

export default Conversation;
