import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const InputContain = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.2rem;
`;

const TextAirear = styled.input`
    width: 80%;
    height: 5vw;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 1px 2px 0px;
    text-indent: 1rem;
`;

const AddBtn = styled.input`
    border: none;
    border-radius: 0.4rem;
    background-color: #333;
    outline: none;
    color: #fff;
    width: 15%;
    height: 5vw;
    font-size: 1rem;
    box-shadow: 0px 3px 2px 0px;
    transition: all 0.7s;

    &:hover {
        background-color: #fff;
        color: #333;
        border: solid 1px #333;
    }
`;

interface ToDoEditerProps {
    onCreate: (content: string) => void;
}

const ToDoEditer: React.FC<ToDoEditerProps> = ({ onCreate }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        inputRef.current?.blur();
        onClickEvent();
    };

    const onClickEvent = () => {
        if (inputRef.current?.value.length) {
            onCreate(inputRef.current.value);
            inputRef.current.value = "";
        }
    };

    return (
        <div>
            <h3>새로운 ToDo 작성하기</h3>
            <InputContain onSubmit={onSubmit}>
                <TextAirear
                    type="text"
                    placeholder="새로운 ToDo..."
                    ref={inputRef}
                />
                <AddBtn type="submit" />
            </InputContain>
        </div>
    );
};

export default ToDoEditer;
