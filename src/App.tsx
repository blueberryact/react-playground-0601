import ToDoApp from "./components/ToDoApp";
import ToDoList from "./components/ToDoList";
import ToDoShorts from "./components/ToDoShorts";
import CalcApp from "./components/CalcApp";
import Ref from "./components/Ref";
import Modal from "./components/Modal";
import { useState } from "react";
import Counter from "./components/Counter";
import View from "./components/View";
import Control from "./components/Control";
import Calculator from "./components/Calculator/Calculator";

const App = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const toggleModal = () => {
        setIsShowModal((prev) => !prev);
    };

    return (
        <div className="App">
            <Calculator />
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
