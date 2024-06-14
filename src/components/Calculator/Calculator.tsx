import { MouseEvent, useState } from "react";
import CalcContainer from "./CalcContainer";
import CalcInput from "./CalcInput";
import styled from "styled-components";
import NumBtn from "./NumBtn";

const BtnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    gap: 1rem;
`;

const ComputeBtnContainer = styled(BtnContainer)`
    display: flex;
    flex-direction: column;
`;

const ContainerWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

enum ECompute {
    "ADD" = "ADD",
    "MIN" = "MIN",
    "MUL" = "MUL",
    "DIV" = "DIV",
}

interface IStackedInput {
    value: string;
    type: ECompute;
}

const NUM_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState<string>("");
    const [stackedInput, setStackedInput] = useState<IStackedInput>();

    const onClickNumBtn = (e: MouseEvent<HTMLButtonElement>) => {
        setCurrentInput((prev) => prev + (e.target as HTMLButtonElement).value);
    };

    const onClickInit = () => {
        setCurrentInput("");
    };

    const onClickCompute = (type: ECompute) => {
        setStackedInput({
            value: currentInput,
            type,
        });

        setCurrentInput("");
    };

    const onClickEqual = () => {
        if (!stackedInput) return;

        const num1 = parseInt(stackedInput.value);
        const num2 = parseInt(currentInput);

        switch (stackedInput.type) {
            case ECompute.ADD:
                setCurrentInput(`${num1 + num2}`);
                break;
            case ECompute.MIN:
                setCurrentInput(`${num1 - num2}`);
                break;
            case ECompute.MUL:
                setCurrentInput(`${num1 * num2}`);
                break;
            case ECompute.DIV:
                setCurrentInput(`${num1 / num2}`);
                break;
            default:
                break;
        }

        setStackedInput(undefined);
    };

    return (
        <CalcContainer>
            <CalcInput value={currentInput} />
            <ContainerWrapper>
                <BtnContainer>
                    {NUM_LIST.map((v, i) => (
                        <NumBtn value={v} key={i} onClick={onClickNumBtn} />
                    ))}
                    <NumBtn value="c" onClick={onClickInit} />
                    <NumBtn value="=" onClick={onClickEqual} />
                </BtnContainer>
                <ComputeBtnContainer>
                    <NumBtn
                        value="+"
                        onClick={() => onClickCompute(ECompute.ADD)}
                    />
                    <NumBtn
                        value="-"
                        onClick={() => onClickCompute(ECompute.MIN)}
                    />
                    <NumBtn
                        value="ˣ"
                        onClick={() => onClickCompute(ECompute.MUL)}
                    />
                    <NumBtn
                        value="÷"
                        onClick={() => onClickCompute(ECompute.DIV)}
                    />
                </ComputeBtnContainer>
            </ContainerWrapper>
        </CalcContainer>
    );
};

export default Calculator;
