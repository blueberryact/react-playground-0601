import { useState } from "react";
import styled from "styled-components";
import createGlobalStyle from "styled-components";

const globalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.background};
        color:${(props) => props.theme.color};
        transition: all 0.5s linear;
    }
`;

const lightTheme = {
    background: "#fff",
    color: "#000",
};

const darkTheme = {
    background: "#000",
    color: "#fff",
};

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
            <div>
                <button>blackTogglebutton</button>
            </div>
        </HEAD>
    );
};

export default ToDoHead;
