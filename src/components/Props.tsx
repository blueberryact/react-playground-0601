import { useState } from "react";
import { Styled } from "styled-components";

interface SetCode {
    number: number;
}

function Viewer({ number }: SetCode) {
    return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function Props() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <h2>{number}</h2>
            <Viewer number={number} />

            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Props;
