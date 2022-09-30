import { SET_IP } from '../actions/types';

const ip = (state = '', action) => {
  switch (action.type) {
    case SET_IP:
      return action.payload;
    default:
      return state;
  }
};

export default ip;
