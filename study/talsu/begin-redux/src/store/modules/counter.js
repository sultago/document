// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export default handleActions({
    [INCREMENT]: ({number}) => ({number: number + 1}),
    [DECREMENT]: ({number}) => ({number: number - 1})
}, { number: 0 });