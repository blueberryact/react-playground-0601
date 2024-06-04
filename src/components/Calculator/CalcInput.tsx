import styled from "styled-components";

const Input = styled.div`
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1.25rem;
    width: 100%;
    max-width: 20rem;
    height: 2rem;
    color: #333;
    font-weight: 600;
    font-style: italic;
`;

interface ICalcInputProps {
    value?: string;
    onChange?(): void;
}

const CalcInput = ({ value, onChange }: ICalcInputProps) => {
    return <Input>{value}</Input>;
};

export default CalcInput;
