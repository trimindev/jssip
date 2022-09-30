import React from 'react';
import {
  Cog6ToothIcon,
  MicrophoneIcon,
  PauseIcon,
  PhoneXMarkIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeDialValue } from '../actions/dialpad';

function Call() {
  const dialpad = useSelector((state) => state.dialpad);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#242424] py-12 px-16 rounded-3xl mx-2 flex flex-col justify-between items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-semibold text-3xl">Son Tung</h1>
        <h2 className="text-xl">{dialpad}</h2>
        <h3 className="text-md text-[#d4d4d4]/60 ">Ho Chi Minh</h3>
      </div>

      <h1 className="mb-5">Calling...</h1>

      <div className="flex justify-center gap-7">
        <button className="rounded-full ring-2 ring-[#d4d4d4] p-4">
          <MicrophoneIcon className="w-6 h-6" />
        </button>

        <button className="rounded-full ring-2 ring-[#d4d4d4] p-4">
          <SpeakerWaveIcon className="w-6 h-6" />
        </button>

        <button className="rounded-full ring-2 ring-[#d4d4d4] p-4">
          <PauseIcon className="w-6 h-6" />
        </button>

        <button className="rounded-full ring-2 ring-[#d4d4d4] p-4">
          <Cog6ToothIcon className="w-6 h-6" />
        </button>
      </div>

      <button
        className="p-5 bg-red-600 rounded-full"
        onClick={() => dispatch(removeDialValue())}
      >
        <Link to={'/dialpad'}>
          <PhoneXMarkIcon className="w-6 h-6 " />
        </Link>
      </button>
    </div>
  );
}

export default Call;
