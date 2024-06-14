import styled from "styled-components";
import { TFC } from "../../types/modal";
import { useState } from "react";

const Container = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: blanchedalmond;
`;

const CalcContainer: TFC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default CalcContainer;
