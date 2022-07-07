import produce from 'immer';



import { Types } from './actions';

export const INITIAL_STATE = {
 countValue: 0,
 cats: [],
 error: false
};

export default function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case Types.INCREMENT:
      return produce(state, draft => {
        draft.countValue = draft.countValue + 1
      });
    case Types.DECREMENT:
      return produce(state, draft => {
        draft.countValue = draft.countValue - 1
      });
    case Types.CATS_SUCCESS:
      return produce(state, draft => {
        const { data } = action.payload;
        draft.cats = data;
        draft.error = false;
      });
    case Types.CATS_FAILURE:
      return produce(state, draft => {
        draft.cats = [];
        draft.error = true;
      });
    default:
      return state;
  }
}
