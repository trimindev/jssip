import {
  APPEND_DIAL_VALUE,
  REMOVE_DIAL_VALUE,
  REMOVE_LAST_CHAR_DIAL_VALUE,
} from './types';

export const appendDialValue = (value) => {
  return {
    type: APPEND_DIAL_VALUE,
    payload: value,
  };
};

export const removeLastCharDialValue = () => {
  return {
    type: REMOVE_LAST_CHAR_DIAL_VALUE,
  };
};
export const removeDialValue = () => {
  return {
    type: REMOVE_DIAL_VALUE,
  };
};
