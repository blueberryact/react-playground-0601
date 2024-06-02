import { ChangeEvent, useState } from "react";

function ToDoShorts() {
    const [state, setState] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: "",
    });
    const handleOnChange = (
        e: ChangeEvent<
            | HTMLInputElement
            | HTMLSelectElement
            | HTMLSelectElement
            | HTMLTextAreaElement
        >
    ) => {
        console.log("현재 수정 대상", e.target.name);
        console.log("수정값", e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <div>
                <input
                    onChange={handleOnChange}
                    name="name"
                    value={state.name}
                    placeholder="이름"
                />
            </div>
            <div>
                <select
                    name="gender"
                    value={state.gender}
                    onChange={handleOnChange}
                >
                    <option value={""}></option>
                    <option value={"남성"}>남성</option>
                    <option value={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input
                    value={state.birth}
                    type="date"
                    name="birth"
                    onChange={handleOnChange}
                />
            </div>
            <textarea
                name="bio"
                onChange={handleOnChange}
                value={state.bio}
            ></textarea>
        </div>
    );
}

export default ToDoShorts;
