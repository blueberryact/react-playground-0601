import { TFC } from "../../types/modal";
import styled from "styled-components";
import ToDoLi from "./ToDoLi";
import { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import ToDoUl from "./ToDoUl";
import ToDoEditer from "./ToDoEditer";
import ToDoSearch from "./ToDoSearch";
import { IArr } from "../../types/type";

const ConTain = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    background-color: rgba(1, 1, 1, 0.1);
    border-radius: 1rem;
    gap: 1.25rem;
`;

const mokTodo = [
    {
        id: 0,
        isDone: false,
        content: "pravit",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "im going homes",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "saksldj;l",
        createdDate: new Date().getTime(),
    },
];

// Ifunctionnar 타입 정의
interface Ifunctionnar {
    id: number;
    isDone: boolean;
    content: string;
    createdDate: number;
}

const ToDo = () => {
    // 초기 상태를 mokTodo로 설정하고 useState의 타입을 Ifunctionnar 배열로 지정
    const [todo, setTodo] = useState<Ifunctionnar[]>(mokTodo);

    const addTodo = (content: string) => {
        const newItem: Ifunctionnar = {
            id: 0,
            isDone: false,
            content,
            createdDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]); // 기존 todo 배열 앞에 새 항목 추가
    };
    return (
        <ConTain>
            <ToDoHeader />
            <ToDoEditer />
            <ToDoSearch />
            <ToDoUl>
                <ToDoLi />
            </ToDoUl>
        </ConTain>
    );
};

export default ToDo;
