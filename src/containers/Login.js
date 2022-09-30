import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { setIp } from '../actions/setIp';
import { Link } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const ip = useSelector((state) => state.ip);

  return (
    <form
      className=" flex justify-center items-center flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(ip);
      }}
    >
      <input
        type="text"
        placeholder="IP address"
        className="w-full px-5 py-3.5 rounded-2xl bg-[#242424] placeholder-[#d4d4d4]/40 outline-none mb-6"
        required
        onChange={(e) => dispatch(setIp(e.target.value))}
      />

      <button
        type="submit"
        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#575757] bg-[#242424]/40 transition hover:border-[#efefef] hover:text-[#efefef] hover:bg-[#242424]"
      >
        <Link to={'dialpad'}>
          <ChevronRightIcon className="h-6 w-6 " />
        </Link>
      </button>
    </form>
  );
}

export default Login;
