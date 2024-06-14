import { useState } from "react";
import SecondList from "./SecondList";
import CreateToDo from "./CreateToDo";

const SecondToDo = () => {
    const [todo, setTodo] = useState([
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
