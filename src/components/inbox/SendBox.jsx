import React from "react";
import {
  MdSend,
  MdOutlineInsertEmoticon,
  MdSettingsVoice,
} from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const SendBox = () => {
  return (
    <form>
      <div class="border-t-2 border-gray-200  mb-2 sm:mb-0">
        <div class="relative flex">
          <span class="absolute inset-y-0 flex items-center">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <MdSettingsVoice />
            </button>
          </span>
          <input
            type="text"
            placeholder="Write your message!"
            class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200  py-3"
          />
          <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6 text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <FaCamera />
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <MdOutlineInsertEmoticon />
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out   focus:outline-none"
            >
              <MdSend />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SendBox;
