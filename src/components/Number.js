import React from 'react';
import { connect } from 'react-redux';
import { appendDialValue } from '../actions/dialpad';

const Number = ({ config, dispatch }) => {
  return (
    <li
      className="w-16 h-16  flex flex-col justify-start items-center cursor-pointer"
      onClick={() => {
        dispatch(appendDialValue(config[0]));
      }}
    >
      <span className="text-2xl font-semibold">{config[0]}</span>
      <span className="text-[#d4d4d4]/50 text-sm">{config[1]}</span>
    </li>
  );
};

export default connect()(Number);
