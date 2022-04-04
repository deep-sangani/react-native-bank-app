import {all} from 'redux-saga/effects';
import {loginsaga} from './loginsaga';

export default function* rootSaga() {
  yield all([
    // ... other sagas
    loginsaga(),
  ]);
}
