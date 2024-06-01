import ToDoApp from "./components/ToDoApp";
import ToDoList from "./components/ToDoList";
import ToDoShorts from "./components/ToDoShorts";

const App = () => {
    return (
        <div className="App">
            <ToDoApp />
            <ToDoList />
            <ToDoShorts />
        </div>
    );
};

export default App;
