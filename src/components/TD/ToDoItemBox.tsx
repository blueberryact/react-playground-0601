import { useEffect } from "react";
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

interface ToDoItemBoxProps {
    id: number;
    content: string;
    createdDate: number;
    isDone: boolean;
    onDelete: (id: number) => void;
    onClickCheckbox(id: number): void;
}

const ToDoItemBox: React.FC<ToDoItemBoxProps> = ({
    id,
    content,
    createdDate,
    isDone,
    onDelete,
    onClickCheckbox,
}) => {
    const ToDay = new Date(createdDate).toLocaleDateString();

    return (
        <ToDoItems>
            <input
                type="checkbox"
                defaultChecked={isDone}
                onClick={() => onClickCheckbox(id)}
            />
            <Title_col>{content}</Title_col>
            <Date_col>{ToDay}</Date_col>
            <Btn_col onClick={() => onDelete(id)}>삭제</Btn_col>
        </ToDoItems>
    );
};

export default ToDoItemBox;
