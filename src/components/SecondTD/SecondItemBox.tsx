import { useState } from "react";
import styled from "styled-components";
const ToDoItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: auto;
    border-bottom: 1px solid rgb(240, 240, 240);
`;

const Title_col = styled.div`
    flex: 1;
`;

const EditInput = styled.input`
    outline: none;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 0.5rem;
`;

const Checkbox_col = styled.div`
    width: 20px;
`;

const Date_col = styled.div`
    font-size: 1.12rem;
    color: #000;
`;

const Btn_col = styled.button`
    cursor: pointer;
    color: #333;
    border-radius: 2px;
    margin-left: 20px;
    font-size: 14px;
    border: none;
`;

const SecondItemBox = () => {
    return (
        <ToDoItems>
            <EditInput type="checkbox" />
            <Title_col>asdasd</Title_col>
            <Date_col>대충 시간</Date_col>
            <Btn_col>asd</Btn_col>
        </ToDoItems>
    );
};
export default SecondItemBox;
