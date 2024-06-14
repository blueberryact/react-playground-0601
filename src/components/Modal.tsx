import styled from "styled-components";
import { IFunctionalComponent } from "../types/modal";

const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const ModalContainer = styled.div`
    border-radius: 1rem;
    background-color: white;
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

interface IModalProps extends IFunctionalComponent {
    toggleModal(): void;
    width?: string;
    height?: string;
}

const Modal = ({
    children,
    toggleModal,
    height = "30rem",
    width = "25rem",
}: IModalProps) => {
    return (
        <ModalBackground onClick={toggleModal}>
            <ModalContainer
                style={{
                    height,
                    width,
                }}
            >
                {children}
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
