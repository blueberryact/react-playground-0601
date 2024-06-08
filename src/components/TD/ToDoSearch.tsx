import { useState } from "react";
import styled from "styled-components";
import ToDoItemBox from "./ToDoItemBox";

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

interface ToDoSearchProps {
    myTodo: (content: string) => void;
    items: {
        id: number;
        content: string;
        createdDate: number;
        isDone: boolean;
    }[];
    onDelete: (id: number) => void;
}

const ToDoSearch: React.FC<ToDoSearchProps> = ({ myTodo, items, onDelete }) => {
    const [content, setContent] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
        myTodo(e.target.value);
    };

    return (
        <div>
            <h3>Todo List📂</h3>
            <Searchbar
                placeholder="검색어를 입력하세요"
                type="text"
                value={content}
                onChange={handleInputChange}
            />
            <DivContain>
                {items.map((item) => (
                    <ToDoItemBox
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        createdDate={item.createdDate}
                        isDone={item.isDone}
                        onDelete={onDelete}
                    />
                ))}
            </DivContain>
        </div>
    );
};

export default ToDoSearch;
