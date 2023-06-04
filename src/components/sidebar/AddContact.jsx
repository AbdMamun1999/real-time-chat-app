import React from "react";
import { FaUserPlus, FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const AddContact = () => {
  const handleModal = () => {};

  return (
    <div className="flex flex-row justify-between py-4 px-3 text-[20px] ">
      <button>
        <FaUserPlus />
      </button>
      <FaUserFriends />
      <FiSettings />
    </div>
  );
};

export default AddContact;
