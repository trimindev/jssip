import { SET_IP } from './types';

export const setIp = (value) => {
  return {
    type: SET_IP,
    payload: value,
  };
};
