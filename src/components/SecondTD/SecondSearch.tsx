import React, { ReactNode } from "react";
import styled from "styled-components";

const Searchbar = styled.input`
    margin-bottom: 20px;
    border: none;
    width: 100%;
    border-bottom: 1px solid rgba(220, 220, 220, 1);
    height: 3vw;
    text-indent: 1.25rem;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 1px 0px;
`;

const DivContain = styled.div`
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

const DeleteContain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ResetBtn = styled.button`
    border: none;
    outline: none;
    background: #333;
    height: 4vw;
    border-radius: 0.5rem;
    color: #dfdfdf;
    transition: all.5s;
    box-shadow: 0px 2px 1.5px 0px;

    &:hover {
        background-color: #fff;
        color: #333;
    }
`;

interface secondSearchProps {
    children?: ReactNode;
}

const SecondSearch: React.FC<secondSearchProps> = ({ children }) => {
    return (
        <div>
            <DeleteContain>
                <h3>ToDO List✏️</h3>
                <ResetBtn>reset</ResetBtn>
            </DeleteContain>
            <Searchbar type="text" placeholder="검색어를입력하세요" />
            <DivContain>{children}</DivContain>
        </div>
    );
};

export default SecondSearch;
