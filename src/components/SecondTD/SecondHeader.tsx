import { useState } from "react";
import { FC } from "react";
import styled from "styled-components";

const Header = styled.header`
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

const date: string = new Date().toDateString();

const SecondHeader: FC = () => {
    return (
        <Header>
            <h2>오늘의 할일📗</h2>
            <div>{date}</div>
        </Header>
    );
};

export default SecondHeader;
