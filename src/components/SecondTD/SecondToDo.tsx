import { useRef, useState } from "react";
import { FC } from "react";
import SecondHeader from "./SecondHeader";
import styled from "styled-components";
import SecondEditor from "./SecondEditor";
import SecondSearch from "./SecondSearch";
import SecondItemBox from "./SecondItemBox";

const Searchbar = styled.input`
    margin-bottom: 20px;
    border: none;
    width: 100%;
    border-bottom: 1px solid rgba(220, 220, 220, 1);
    height: 3vw;
    text-indent: 1.25rem;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 1px 0px;
`;

const DivContain = styled.div`
    background-color: rgba(10, 10, 10, 0.2);
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgb(220, 220, 220);
    padding-top: 15px;
    padding-bottom: 15px;
    border: none;
    box-shadow: 0px 1.5px 1.5px 1px;
    border-radius: 0.5rem;
    width: 100%;
`;

const DeleteContain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ResetBtn = styled.button`
    border: none;
    outline: none;
    background: #333;
    height: 4vw;
    border-radius: 0.5rem;
    color: #dfdfdf;
    transition: all.5s;
    box-shadow: 0px 2px 1.5px 0px;

    &:hover {
        background-color: #fff;
        color: #333;
    }
`;

const All = styled.div`
    width: 60vw;
    margin: auto;
`;

interface ToDoItem {
    id: number;
    isDone: boolean;
    content: string;
    createDate: number;
}

const SecondMain: FC = () => {
    const mockToDo: ToDoItem[] = [
        {
            id: 0,
            isDone: false,
            content: "리액트 공부하기",
            createDate: new Date().getTime(),
        },
    ];

    const [todo, setTodo] = useState<ToDoItem[]>(mockToDo);
    const idRef = useRef(1);
    const onCreate = (content: string) => {
        const newItem: ToDoItem = {
            id: idRef.current,
            isDone: false,
            content,
            createDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    };

    return (
        <All>
            <SecondHeader></SecondHeader>
            <SecondEditor onCreate={onCreate}></SecondEditor>
            <SecondSearch>
                <SecondItemBox></SecondItemBox>
            </SecondSearch>
        </All>
    );
};
export default SecondMain;
