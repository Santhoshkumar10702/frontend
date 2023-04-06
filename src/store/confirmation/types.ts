import {FormDataType} from '../../components/Booking/BookingForm';
import {SET_CONFIRMATION} from './constants';

export type ConfirmationStateType = {
  confirmation: FormDataType | null;
};

export type SetConfirmationType = {
  type: typeof SET_CONFIRMATION;
  payload: {value: FormDataType | null};
};

export type ConfirmationActionTypes = SetConfirmationType;
