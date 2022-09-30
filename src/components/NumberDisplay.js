import React from 'react';
import { connect } from 'react-redux';
import { removeLastCharDialValue } from '../actions/dialpad';
import { BackspaceIcon } from '@heroicons/react/24/outline';

const NumberDisplay = ({ dialValue, removeLastCharDialValue }) => {
  let showBackspace = null;

  if (dialValue.length) {
    showBackspace = (
      <a
        className="cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          removeLastCharDialValue();
        }}
        href
      >
        <BackspaceIcon className="w-6 h-6" />
      </a>
    );
  }

  return (
    <div className="w-full flex justify-between py-3 border-b-[1px] border-[#d4d4d4] mb-10 ">
      <p className="font-semibold text-lg">{dialValue}</p>

      {showBackspace}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dialValue: state.dialpad,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeLastCharDialValue: () => dispatch(removeLastCharDialValue()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberDisplay);
