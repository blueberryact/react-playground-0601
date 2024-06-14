import { FormEventHandler, useState } from "react";
import SecondToDo from "./SecondEditor";
import { FC } from "react";
import { create } from "domain";
import styled from "styled-components";

interface SecondToDoProps {
    id: number;
    isDone: boolean;
    content: string;
    createDate: string;
}

interface toDo {
    id: number;
    isDone: boolean;
    content: string;
    createDate: string;
}

const OtherBtn = styled.li`
    list-style: none;
`;
const FlexBox = styled.div`
    display: flex;
    justify-content: space-around;
`;
const FullContain = styled.div`
    display: flex;
    flex-direction: column;
`;

const SecondList: FC<SecondToDoProps> = () => {
    const date = new Date().toDateString();
    const [inputText, setInputText] = useState<string>("");
    const [ToDoList, setToDoList] = useState<SecondToDoProps[]>([
        { id: 0, content: "", isDone: false, createDate: date },
    ]);
    const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value);
    };
    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newToDo: SecondToDoProps = {
            id: Date.now(),
            isDone: false,
            content: inputText,
            createDate: new Date().toDateString(),
        };
        setToDoList([newToDo, ...ToDoList]);
        setInputText("");
    };

    return (
        <FullContain>
            <div className="todoListContainer">
                {ToDoList.map((item) => (
                    <OtherBtn key={item.id}>
                        {item.isDone ? (
                            <button>버튼</button>
                        ) : (
                            <button>다른버튼</button>
                        )}
                        <FlexBox>
                            <p>{item.id}</p>
                            <p>{item.content}</p>
                            <p>{item.createDate}</p>
                        </FlexBox>
                        <div className="buttonContainer">
                            <button type="button">수정</button>
                            <button type="button">삭제</button>
                        </div>
                    </OtherBtn>
                ))}
            </div>
            <div className="todoCreateContainer">
                <form onSubmit={formHandler}>
                    <input
                        type="text"
                        placeholder="할 일을 입력해 주세요."
                        value={inputText}
                        onChange={textHandler}
                    />
                    <button type="submit">등록하기</button>
                </form>
            </div>
        </FullContain>
    );
};

export default SecondList;
