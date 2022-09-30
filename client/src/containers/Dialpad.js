import React from 'react';
import NumberDisplay from '../components/NumberDisplay';
import NumberPad from '../components/NumberPad';
import { PhoneIcon } from '@heroicons/react/24/solid';

function Dialpad() {
  return (
    <div className=" bg-[#242424] py-12 px-14 rounded-3xl mx-2 flex flex-col justify-between items-center gap-8">
      <NumberDisplay />
      <NumberPad />
      <button className=" flex justify-center items-center p-4 rounded-full bg-green-500">
        <PhoneIcon className="h-8 w-8" />
      </button>
    </div>
  );
}

export default Dialpad;
