import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* login(action) {
    console.log('login')
    console.log(action.query);
    try {
      const url = `FEED_LOGIN`;
      const response = yield axios.get(url);
      console.log(response);
      yield put(actions.setLoginToken(response.data));
    } catch (e) {
      console.log(e);
      yield put(actions.loginFailed());
    }
  }
  