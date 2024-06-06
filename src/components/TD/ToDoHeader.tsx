import { useState } from "react";
import styled from "styled-components";

const MyDate = new Date().toDateString();

const HEAD = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: space-around;
    align-items: flex-start;
    background-color: rgba(10, 10, 10, 0.2);
    border-radius: 1.25rem;
    text-indent: 2rem;
    box-shadow: 0px 1.5px 1.5px 0px;
`;

const ToDoHead = () => {
    return (
        <HEAD>
            <h3>오늘은 📅</h3>
            <h1>{MyDate}</h1>
        </HEAD>
    );
};

export default ToDoHead;
