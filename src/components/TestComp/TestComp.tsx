import React, { KeyboardEvent, ChangeEvent, useReducer, useState } from "react";
import styled from "styled-components";

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

interface stateProps {
    id: number;
    content: string;
    createTime: string;
    isDone: boolean;
}

type actionType =
    | { type: "ADD_TODO"; payload: stateProps }
    | { type: "DELETED_TODO"; id: number }
    | { type: "TOGGLE_TODO"; id: number };

const reducer = (state: stateProps[], action: actionType): stateProps[] => {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload, ...state];
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
            );
        case "DELETED_TODO":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const TestComp: React.FC = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [inputText, setInputText] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value);
        console.log(e.currentTarget.value);
    };

    const handleEnterEvent = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (e.currentTarget.value === "") {
                alert("글자를 입력해주세요");
            } else {
                addToDo();
            }

            console.log(e);
        }
    };

    const addToDo = () => {
        const newTodo: stateProps = {
            id: Date.now(),
            content: inputText,
            isDone: false,
            createTime: new Date().toLocaleDateString(),
        };
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setInputText("");
    };

    return (
        <FullContain>
            <FlexBox>
                <input
                    type="text"
                    onKeyDown={handleEnterEvent}
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button onClick={addToDo}></button>
            </FlexBox>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.isDone}
                            onChange={() =>
                                dispatch({ type: "TOGGLE_TODO", id: todo.id })
                            }
                        />
                        {todo.content}
                        <button
                            onClick={() =>
                                dispatch({ type: "DELETED_TODO", id: todo.id })
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </FullContain>
    );
};

export default TestComp;
