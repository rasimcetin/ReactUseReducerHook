export interface CounterState {
  count: number;
}

export enum ActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type Action =
  | {
      type: ActionTypes.INCREMENT;
      payload: number;
    }
  | {
      type: ActionTypes.DECREMENT;
    };

const counterReducer = (state: CounterState, action: Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case ActionTypes.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
