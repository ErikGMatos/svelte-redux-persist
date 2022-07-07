export const Types = {
  INCREMENT: '@user-COUNTER_INCREMENT',
  DECREMENT: '@user-COUNTER_DECREMENT',
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

