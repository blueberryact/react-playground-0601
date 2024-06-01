import { EStatus, IToDoItem } from "../App";

const ToDoItem = ({ title, desc, status = EStatus.WAITING }: IToDoItem) => {
    const statusIcon =
        status === EStatus.WAITING
            ? "👀"
            : status === EStatus.PROGRESS
            ? "🔥"
            : "✅";

    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
                width: "40rem",
            }}
        >
            <span>{statusIcon}</span>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </li>
    );
};

export default ToDoItem;
