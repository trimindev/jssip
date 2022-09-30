import React from 'react';
import { dialConfig } from '../reducers/dialpad';
import Number from './Number';

const NumberPad = () => {
  return (
    <ul className={'grid grid-cols-3 gap-x-10 gap-y-5'}>
      {dialConfig.map((config, index) => {
        return <Number key={index} config={config} />;
      })}
    </ul>
  );
};

export default NumberPad;
