import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IItem } from "./ToDo";

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

interface ToDoItemBoxProps {
    // id: number;
    // content: string;
    // createdDate: number;
    // isDone: boolean;
    item: IItem;
    onDelete: (id: number) => void;
    onClickCheckbox(id: number): void;
    onModifyContent(id: number, modified: string): void;
}

const ToDoItemBox: React.FC<ToDoItemBoxProps> = ({
    item,
    onDelete,
    onClickCheckbox,
    onModifyContent,
}) => {
    const ToDay = new Date(item.createdDate).toLocaleDateString();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const editInputRef = useRef<HTMLInputElement>(null);

    const enterEditMode = () => {
        setIsEdit(true);
    };

    const exitEditMode = () => {
        if (editInputRef.current?.value) {
            onModifyContent(item.id, editInputRef.current.value);
            // editInputRef.current.value = "";
        }

        setIsEdit(false);
    };

    return (
        <ToDoItems>
            <input
                type="checkbox"
                defaultChecked={item.isDone}
                onClick={() => onClickCheckbox(item.id)}
            />
            {isEdit ? (
                <EditInput defaultValue={item.content} ref={editInputRef} />
            ) : (
                <Title_col>{item.content}</Title_col>
            )}
            <Date_col>{ToDay}</Date_col>
            <Btn_col onClick={() => onDelete(item.id)}>삭제</Btn_col>
            <Btn_col onClick={isEdit ? exitEditMode : enterEditMode}>
                {isEdit ? "적용" : "수정"}
            </Btn_col>
        </ToDoItems>
    );
};

export default ToDoItemBox;
