import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

function login() {
  return (
    <form className=" flex justify-center items-center flex-col">
      <input
        type="text"
        placeholder="IP address"
        className="w-full px-5 py-3.5 rounded-2xl bg-[#242424] placeholder-[#d4d4d4]/40 outline-none mb-6"
        required
      />

      <button
        type="submit"
        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#575757] bg-[#242424]/40 transition hover:border-[#efefef] hover:text-[#efefef] hover:bg-[#242424]"
      >
        <ChevronRightIcon className="h-6 w-6 " />
      </button>
    </form>
  );
}

export default login;
