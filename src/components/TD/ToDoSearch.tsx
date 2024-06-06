import { useState } from "react";
import styled from "styled-components";

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

const ToDoSearch = () => {
    return (
        <div>
            <h3>Todo List📂</h3>
            <Searchbar placeholder="검색어를 입력하세요" type="text" />
        </div>
    );
};

export default ToDoSearch;
