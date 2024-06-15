import { SlowBuffer } from "buffer";
import { useReducer, useState } from "react";

type ActionType =
    | { type: "INCREASE"; data: number }
    | { type: "DECREASE"; data: number }
    | { type: "CLEAR"; data: number };

type StateType = number;
const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "CLEAR":
            return 0;
    }
};
console.log(reducer);

const TestComp = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <strong>{count}</strong>
            </div>
            <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
                +
            </button>
            <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
                -
            </button>
            <button onClick={() => dispatch({ type: "CLEAR", data: 0 })}>
                clear
            </button>
        </div>
    );
};

export default TestComp;
