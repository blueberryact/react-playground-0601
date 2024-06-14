import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import ToDoItemBox from "./ToDoItemBox";
import { Ifunctionnar } from "../../types/type";

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

interface ToDoSearchProps extends Ifunctionnar {
    myTodo: (content: string) => void;
    allReset: () => void;
}

const ToDoSearch: FC<ToDoSearchProps> = ({ allReset, myTodo, children }) => {
    const [content, setContent] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
        myTodo(e.target.value);
    };

    return (
        <div>
            <DeleteContain>
                <h3>Todo List📂</h3>
                <ResetBtn onClick={allReset}>전체삭제</ResetBtn>
            </DeleteContain>
            <Searchbar
                placeholder="검색어를 입력하세요"
                type="text"
                value={content}
                onChange={handleInputChange}
            />
            <DivContain>{children}</DivContain>
        </div>
    );
};

export default ToDoSearch;
