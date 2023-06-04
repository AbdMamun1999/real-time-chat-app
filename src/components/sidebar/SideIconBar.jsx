import React from "react";
import {
  BsFillChatDotsFill,
  BsStarFill,
  BsFillCalendarCheckFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const SideIconBar = () => {
  return (
    <section className="px-2 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-y-10 mt-3">
        <div>
          <div className="w-[40px] bg-[#19376D] h-[40px] text-white border-2 flex items-center justify-center rounded-md">
            <BsFillChatDotsFill size="20" />
          </div>
        </div>
        <div>
          <FaUser size="20" />
        </div>
        <div>
          <BsStarFill size="20" />
        </div>
        <div>
          <BsShieldFillCheck size="20" />
        </div>
      </div>
    </section>
  );
};

export default SideIconBar;
