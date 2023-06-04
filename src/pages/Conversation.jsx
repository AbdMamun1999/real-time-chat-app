import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideIconBar from "../components/sidebar/SideIconBar";
import Sidebar from "../components/sidebar/Sidebar";

const Conversation = () => {
  return (
    <section>
      <div className="flex flex-row">
        <div className="">
          <div className="h-[100vh] bg-gray-100">
            <SideIconBar />
          </div>
        </div>
        <div className="w-full">
          <div>
            <Navbar />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4 border">
              <Sidebar />
            </div>
            <div className="col-span-5 border">Chat bot</div>
            <div className="col-span-3 border">Chat info</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
