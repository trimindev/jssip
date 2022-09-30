import {
  APPEND_DIAL_VALUE,
  REMOVE_DIAL_VALUE,
  REMOVE_LAST_CHAR_DIAL_VALUE,
} from '../actions/types';

const dialpad = (state = '', action) => {
  switch (action.type) {
    case APPEND_DIAL_VALUE:
      return state + action.payload;
    case REMOVE_LAST_CHAR_DIAL_VALUE:
      return state.slice(0, state.length - 1);
    case REMOVE_DIAL_VALUE:
      return '';
    default:
      return state;
  }
};

export const dialConfig = [
  ['1', ''],
  ['2', 'ABC'],
  ['3', 'DEF'],
  ['4', 'GHI'],
  ['5', 'JKL'],
  ['6', 'MNO'],
  ['7', 'PQRS'],
  ['8', 'TUV'],
  ['9', 'WXYZ'],
  ['*'],
  ['0', '+'],
  ['#'],
];

export default dialpad;
