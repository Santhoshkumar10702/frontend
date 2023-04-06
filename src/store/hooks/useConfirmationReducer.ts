import {useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as authenticationActions from '../confirmation/actions';
import {AppReducerType} from '../index';

const useConfirmationReducer = () => {
  const dispatch = useDispatch();

  const state = useSelector(({confirmation}: AppReducerType) => confirmation);

  const actions = useMemo(
    () => bindActionCreators(authenticationActions, dispatch),
    [dispatch],
  );

  return {state, actions};
};

export default useConfirmationReducer;
