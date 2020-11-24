import {videoOptionTypes} from './constants';
import {handleActions} from 'redux-actions';

const dataState = {
  action: videoOptionTypes.CANCEL,
};
export default {
  videoOptions: handleActions(
    {
      [videoOptionTypes.ACTION]: (state: any, {payload}: any) => {
        return {...state, action: payload};
      },
    },
    dataState,
  ),
};

export const setVideoOption = (action: string) => {
  return {
    type: videoOptionTypes.ACTION,
    payload: action,
  };
};
