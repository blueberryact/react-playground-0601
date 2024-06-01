import styled from "styled-components";
import { EStatus, IToDoItem } from "./ToDoApp";

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1.5px solid gray;
    border-radius: 0.5rem;
    margin: 1rem auto;
    width: 40rem;
    gap: 1rem;
`;

const StatusIcon = styled.span`
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    scale: 150%;
`;

const ContentBox = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: start;
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

const Desc = styled.span`
    color: rgba(150, 150, 150, 1);
    font-size: 1rem;
    line-height: 160%;
    font-weight: 300;
    padding-left: 1rem;
    white-space: break-spaces;
    word-break: break-all;
`;

const Title = styled(Desc)`
    font-weight: 600;
    font-size: 1.5rem;
    color: black;
    padding: 0;
`;

const ToDoItem = ({ title, desc, status = EStatus.WAITING }: IToDoItem) => {
    const statusIcon =
        status === EStatus.WAITING
            ? "👀"
            : status === EStatus.PROGRESS
            ? "🔥"
            : "✅";

    return (
        <ListItem>
            <StatusIcon>{statusIcon}</StatusIcon>
            <ContentBox>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </ContentBox>
        </ListItem>
    );
};

export default ToDoItem;
