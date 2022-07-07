import produce from 'immer';

import { Types } from './actions';

export const INITIAL_STATE = {
 userCount: 0,
};

export default function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case Types.INCREMENT:
      return produce(state, draft => {
        draft.userCount = draft.userCount + 1
      });
    case Types.DECREMENT:
      return produce(state, draft => {
        draft.userCount = draft.userCount - 1
      });
    default:
      return state;
  }
}
