import { useState, useRef } from "react";
import styled from "styled-components";
import ToDoHeader from "./ToDoHeader";
import ToDoEditer from "./ToDoEditer";
import ToDoSearch from "./ToDoSearch";
import ToDoItemBox from "./ToDoItemBox";

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

interface Ifunctionnar {
    id: number;
    isDone: boolean;
    content: string;
    createdDate: number;
}

const ToDo = () => {
    const [todo, setTodo] = useState<Ifunctionnar[]>(mokTodo);
    const [searchResults, setSearchResults] = useState<Ifunctionnar[]>(mokTodo);

    const idRef = useRef(3);

    const onCreate = (content: string) => {
        const newItem: Ifunctionnar = {
            id: idRef.current,
            isDone: false,
            content,
            createdDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        setSearchResults([newItem, ...todo]); // 검색 결과도 업데이트
        idRef.current += 1;
    };

    const handleSearch = (query: string) => {
        if (query === "") {
            setSearchResults(todo);
        } else {
            setSearchResults(
                todo.filter((item) => item.content.includes(query))
            );
        }
    };

    const handleDelete = (id: number) => {
        const updatedTodos = todo.filter((item) => item.id !== id);
        setTodo(updatedTodos);
        setSearchResults(updatedTodos); // 검색 결과도 업데이트
    };

    return (
        <ConTain>
            <ToDoHeader />
            <ToDoEditer onCreate={onCreate} />
            <ToDoSearch
                myTodo={handleSearch}
                items={searchResults}
                onDelete={handleDelete}
            />
        </ConTain>
    );
};

export default ToDo;
