import { useReducer } from "react";
import "./App.css";
import counterReducer, { ActionTypes } from "./counterReducer";

function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const increment = () => {
    dispatch({ type: ActionTypes.INCREMENT, payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: ActionTypes.DECREMENT });
  };

  return (
    <>
      <div className="grid place-items-center space-y-3">
        <div className="w-36 text-3xl font-bold underline">
          Count: {state.count}
        </div>
        <button
          className="w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="w-36 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
