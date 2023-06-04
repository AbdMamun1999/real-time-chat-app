import React from "react";
import { FaUserPlus, FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const AddContact = () => {
  return (
    <div className="flex flex-row justify-between py-4 px-3 text-[20px] ">
      <FaUserPlus />
      <FaUserFriends />
      <FiSettings />
    </div>
  );
};

export default AddContact;
