import { MouseEvent } from "react";
import styled from "styled-components";

const Btn = styled.button`
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: black;
    border: none;
    outline: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

interface INumBtnProps {
    value?: number | string;
    onClick(e: MouseEvent<HTMLButtonElement>): void; // 비어있다;
}

const NumBtn = ({ value, onClick }: INumBtnProps) => {
    return (
        <Btn value={value} onClick={onClick}>
            {value}
        </Btn>
    );
};

export default NumBtn;
