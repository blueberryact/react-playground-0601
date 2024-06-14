const CreateToDo = () => {
    return (
        <div className="todoCreateContainer">
            <form>
                <input type="text" placeholder="할 일을 입력해 주세요." />
                <button>등록하기</button>
            </form>
        </div>
    );
};

export default CreateToDo;
