import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as CounterActions from './actions';
import api from '../../../services/api'

export function* counterRequest() {
  try {
    const response = yield call(api.get, '/');
    yield put(CounterActions.catsSuccess(response.data));
  } catch (error) {
    yield put(CounterActions.failure());
  }
}

export default all([
  takeLatest(CounterActions.Types.REQUEST, counterRequest),
]);
