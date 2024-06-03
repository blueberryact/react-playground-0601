import { useState } from "react";
import { styled } from "styled-components";

const Heading2 = styled.h2`
    font-size: 50px;
    display: inline-block;
    width: 3.5rem;
    color: red;
    background-color: black;
`; //styled 라이브러리가 작동이 안되어 재기동 후 npm i 후 작동 확인

function CalcApp() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <Heading2>{number}</Heading2>
            <div>
                <h3>{number % 2 ? "홀수" : "짝수"}</h3>
            </div>

            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default CalcApp;
