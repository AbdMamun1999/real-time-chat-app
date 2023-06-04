import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <form class="flex items-center">
      <label for="voice-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          id="voice-search"
          class=" border border-gray-300 bg-gray-100 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by email"
          required
        />
      </div>
    </form>
  );
};

export default SearchBox;
