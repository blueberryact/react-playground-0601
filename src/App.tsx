import ToDoApp from "./components/ToDoApp";
import ToDoList from "./components/ToDoList";
import ToDoShorts from "./components/ToDoShorts";
import CalcApp from "./components/Props";
import Ref from "./components/Ref";

const App = () => {
    return (
        <div className="App">
            <ToDoApp />
            <ToDoList />
            <ToDoShorts />
            <CalcApp />
            <Ref />
        </div>
    );
};

export default App;
