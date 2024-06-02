import { useState, ChangeEvent } from "react";

function ToDoList() {
    const [name, setName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [birth, setBirth] = useState<string>("");
    const [bio, setBio] = useState<string>("");

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        console.log(e.target.value);
    };
    const onChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
        console.log(e.target.value);
    };
    const onChangeBirth = (e: ChangeEvent<HTMLInputElement>) => {
        setBirth(e.target.value);
        console.log(e.target.value);
    };
    const onChangeBio = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <div>
                <input
                    value={name}
                    onChange={onChangeName}
                    placeholder="이름"
                    type="text"
                />
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option value=""></option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                </select>
            </div>
            <div>
                <input type="date" value={birth} onChange={onChangeBirth} />
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio}></textarea>
            </div>
        </>
    );
}

export default ToDoList;
