import {takeLatest} from 'redux-saga/effects';
import {LOGINSAGA} from '../constants';

function* loginsagaEffet() {
  console.log('loginsagaEffet');
  return {};
}

export function* loginsaga() {
  yield takeLatest(LOGINSAGA, loginsagaEffet);
}
