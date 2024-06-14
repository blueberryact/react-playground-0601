import { useState } from "react";
import { FC } from "react";
import SecondList from "./SecondList";
import CreateToDo from "./CreateToDo";

interface secondToDoProps {
    id: number;
    content: string;
    isDone: boolean;
    createDate: string;
}

const SecondToDo = () => {
    const [todo, setTodo] = useState<secondToDoProps[]>([
        {
            id: 0,
            content: "",
            isDone: false,
            createDate: "",
        },
    ]);

    return (
        <div className="todoListContainer">
            {todo.map((item) => (
                <SecondList
                    id={item.id}
                    content={item.content}
                    isDone={item.isDone}
                    createDate={item.createDate}
                />
            ))}
            <CreateToDo />
        </div>
    );
};

export default SecondToDo;
