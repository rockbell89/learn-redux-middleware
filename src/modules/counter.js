import { createAction, handleActions } from "redux-actions";
import { delay, put, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

// export const increase = () => ({
//   type: INCREASE,
// });
// export const decrease = () => ({
//   type: DECREASE,
// });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(increase()), 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(decrease()), 1000);
// };

export const increaseAsync = createAction(INCREASE_ASYNC, (event) => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, (event) => undefined);

export function* increaseSaga(action) {
  yield delay(1000);
  yield put(increase());
}

export function* decreaseSaga(action) {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeLatest(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
