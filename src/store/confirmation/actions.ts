import {FormDataType} from '../../components/Booking/BookingForm';
import {SET_CONFIRMATION} from './constants';
import {SetConfirmationType} from './types';

export const setConfirmation = (
  value: FormDataType | null,
): SetConfirmationType => ({
  type: SET_CONFIRMATION,
  payload: {value},
});
