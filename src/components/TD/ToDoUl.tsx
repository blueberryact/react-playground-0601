import styled from "styled-components";
import ToDoItemBox from "./ToDoItemBox";
import { Ifunctionnar } from "../../types/type";

const UlContain = styled.div`
    background-color: rgba(10, 10, 10, 0.2);
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgb(220, 220, 220);
    padding-top: 15px;
    padding-bottom: 15px;
    border: none;
    box-shadow: 0px 1.5px 1.5px 1px;
    border-radius: 0.5rem;
    width: 100%;
`;

const Ul = styled.ul``;

const ToDoUl = ({ children }: Ifunctionnar) => {
    return (
        <UlContain>
            <Ul>{children}</Ul>
            <ToDoItemBox />
            <ToDoItemBox />
            <ToDoItemBox />
        </UlContain>
    );
};

export default ToDoUl;
