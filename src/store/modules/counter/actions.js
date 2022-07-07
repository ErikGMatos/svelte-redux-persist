export const Types = {
  INCREMENT: '@counter-COUNTER_INCREMENT',
  DECREMENT: '@counter-COUNTER_DECREMENT',
  REQUEST: '@counter-REQUEST',
  CATS_SUCCESS: '@counter-SUCCESS',
  CATS_FAILURE: '@counter-FAILURE',
};

export function increment() {
  return {
    type: Types.INCREMENT,
    payload: {},
  };
}

export function decrement() {
  return {
    type: Types.DECREMENT,
    payload: {},
  };
}

export function request() {
  return {
    type: Types.REQUEST,
    payload: {},
  };
}

export function catsSuccess(data) {
  return {
    type: Types.CATS_SUCCESS,
    payload: { data },
  };
}

export function failure() {
  return {
    type: Types.CATS_FAILURE,
    payload: {},
  };
}