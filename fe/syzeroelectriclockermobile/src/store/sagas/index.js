import { takeEvery } from "redux-saga/effects";
import * as actiontype from "../actions/actiontypes";
import { login } from "./login";

export function* loginSaga() {
    yield takeEvery(actiontype.INIT_LOGIN, login);
}