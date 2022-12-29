import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { put, call, takeLatest } from "redux-saga/effects";
import { finishLoading, startLoading } from "./loading";
import createRequestThunk from "../lib/createRequestThunk";
import createRequestSaga from "../lib/createRequestSaga";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const res = await api.getPost(id);
//     setTimeout(() => {
//       dispatch({ type: GET_POST_SUCCESS, payload: res.data });
//     }, 5000);
//   } catch (err) {
//     dispatch({ type: GET_POST_FAILURE, payload: err, error: true });
//     throw err;
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const res = await api.getUsers();
//     setTimeout(
//       () => dispatch({ type: GET_USERS_SUCCESS, payload: res.data }),
//       5000
//     );
//   } catch (err) {
//     dispatch({ type: GET_USERS_FAILURE, payload: err, error: true });
//     throw err;
//   }
// };

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// export function* getPostSaga(action) {
//   yield put(startLoading(GET_POST));
//   try {
//     const post = yield call(api.getPost, action.payload);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: error,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_POST));
// }

// export function* getUsersSaga() {
//   yield put(startLoading(GET_USERS));
//   try {
//     const post = yield call(api.getUsers);
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: post.data,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_USERS_FAILURE,
//       payload: error,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_USERS));
// }

export const getPostSaga = createRequestSaga(GET_POST, api.getPost);
export const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // [GET_POST]: (state) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: true,
    //   },
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      // loading: {
      //   ...state.loading,
      //   GET_POST: false,
      // },
      post: action.payload,
    }),
    // [GET_POST_FAILURE]: (state) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: false,
    //   },
    // }),
    // [GET_USERS]: (state) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: true,
    //   },
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      // loading: {
      //   ...state.loading,
      //   GET_USERS: false,
      // },
      users: action.payload,
    }),
    // [GET_USERS_FAILURE]: (state) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: false,
    //   },
    // }),
  },
  initialState
);

export default sample;
