import { ChangeEvent, FormEvent, useState } from "react";
import ToDoItem from "./ToDoItem";

export enum EStatus {
    WAITING = "WAITING",
    PROGRESS = "PROGRESS",
    COMPLETE = "COMPLETE",
}

export interface IToDoItem {
    title: string;
    desc: string;
    status?: EStatus;
}

type TToDoList = IToDoItem[];

enum EInputType {
    title = "title",
    desc = "desc",
    status = "status",
}

const ToDoApp = () => {
    const [toDoList, setToDoList] = useState<TToDoList>([]);

    const [toDo, setToDo] = useState<IToDoItem>({
        title: "",
        desc: "",
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setToDoList((prev) => [toDo, ...prev]);
        setToDo({ title: "", desc: "", status: undefined });
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>, type: EInputType) => {
        const { value } = e.currentTarget;

        setToDo((prev) => ({ ...prev, [type]: value }));
    };

    return (
        <>
            <header>
                <form onSubmit={onSubmit}>
                    <input
                        value={toDo.title}
                        onChange={(e) => onChange(e, EInputType.title)}
                        placeholder="Title"
                    />
                    <input
                        value={toDo.desc}
                        onChange={(e) => onChange(e, EInputType.desc)}
                        placeholder="Description"
                    />
                    <select
                        value={toDo.status}
                        onChange={(e) =>
                            onChange(
                                e as unknown as ChangeEvent<HTMLInputElement>,
                                EInputType.status
                            )
                        }
                    >
                        <option value={undefined}>Select Status</option>
                        <option value={EStatus.WAITING}>
                            {EStatus.WAITING}
                        </option>
                        <option value={EStatus.PROGRESS}>
                            {EStatus.PROGRESS}
                        </option>
                        <option value={EStatus.COMPLETE}>
                            {EStatus.COMPLETE}
                        </option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </header>
            <main>
                <ul>
                    {toDoList.map((item, index) => {
                        return (
                            <ToDoItem
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                status={item.status}
                            />
                        );
                    })}
                </ul>
            </main>
        </>
    );
};

export default ToDoApp;
