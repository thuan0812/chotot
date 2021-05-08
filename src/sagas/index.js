import {all} from 'redux-saga/effects';

import {watchLogin} from './users';
/**
 * Adds two numbers together.
 *
 */
export function* rootSaga() {
    yield all([watchLogin()]);
}