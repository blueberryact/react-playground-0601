import { ChangeEvent, FormEvent, useState } from "react";
import ToDoItem from "./ToDoItem";
import { styled } from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    gap: 0.5rem;
`;

const Input = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 1.5px solid rgba(200, 200, 200, 1);
    transition: background-color 0.3s ease-in-out;
    outline: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:focus {
        background-color: rgba(50, 255, 100, 0.2);
    }
`;

const Select = styled.select`
    padding: 0.5rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    border: 1.5px solid rgba(200, 200, 200, 1);
    outline: none;
`;

const Button = styled.button`
    border: 1.5px solid transparent;
    padding: 0.5rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    font-weight: 600;
    outline: none;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
`;

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
                <Form onSubmit={onSubmit}>
                    <Input
                        value={toDo.title}
                        onChange={(e) => onChange(e, EInputType.title)}
                        placeholder="Title"
                    />
                    <Input
                        value={toDo.desc}
                        onChange={(e) => onChange(e, EInputType.desc)}
                        placeholder="Description"
                    />
                    <Select
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
                    </Select>
                    <Button type="submit">Submit</Button>
                </Form>
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
