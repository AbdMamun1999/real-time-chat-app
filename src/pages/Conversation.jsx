import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideIconBar from "../components/sidebar/SideIconBar";
import Sidebar from "../components/sidebar/Sidebar";

const Conversation = () => {
  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <div className="h-[100vh] bg-gray-100">
            <SideIconBar />
          </div>
        </div>
        <div className="col-span-11 ">
          <div>
            <Navbar />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-3 border">
              <Sidebar />
            </div>
            <div className="col-span-6 border">Chat bot</div>
            <div className="col-span-3 border">Chat info</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
