import ToDoApp from "./components/ToDoApp";
import ToDoList from "./components/ToDoList";
import ToDoShorts from "./components/ToDoShorts";
import Props from "./components/Props";

const App = () => {
    return (
        <div className="App">
            <ToDoApp />
            <ToDoList />
            <ToDoShorts />
            <Props />
        </div>
    );
};

export default App;
