import ToDoApp from "./components/ToDoApp";
import ToDoList from "./components/ToDoList";
import ToDoShorts from "./components/ToDoShorts";
import CalcApp from "./components/CalcApp";
import Ref from "./components/Ref";
import Modal from "./components/Modal";
import { useState } from "react";
import ToDo from "./components/TD/ToDo";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator/Calculator";
import styled from "styled-components";

import SecondToDo from "./components/SecondTD/SecondEditor";

const App = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const toggleModal = () => {
        setIsShowModal((prev) => !prev);
    };

    return (
        <div className="App">
            {/* <ToDo /> */}
            <SecondToDo />
            {/* <Calculator /> */}
            {/* {isShowModal && (
                <Modal toggleModal={toggleModal} width="40rem" height="20rem">
                    <ToDoApp />
                    <ToDoList />
                    <ToDoShorts />
                    <CalcApp />
                    <Ref />
                </Modal>
            )}
            <button onClick={toggleModal}>모달 열기</button>
            <Counter>
                <View />
                <Control />
            </Counter> */}
        </div>
    );
};

export default App;
