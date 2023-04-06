import {ConfirmationActionTypes, ConfirmationStateType} from './types';
import {SET_CONFIRMATION} from './constants';

const initialState: ConfirmationStateType = {
  confirmation: null,
};

const reducer = (
  state = initialState,
  action: ConfirmationActionTypes,
): ConfirmationStateType => {
  switch (action.type) {
    case SET_CONFIRMATION:
      return {
        ...state,
        confirmation: action.payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
