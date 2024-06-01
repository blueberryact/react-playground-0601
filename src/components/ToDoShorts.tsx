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
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        console.log("현재 수정 대상:", e.currentTarget.name);
        console.log("수정값:", e.currentTarget.value);
        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    return (
        <div>
            <div>
                <input
                    name="name"
                    value={state.name}
                    onChange={handleOnChange}
                    placeholder="이름"
                />
            </div>
            <div>
                <select
                    name="gender"
                    value={state.name}
                    onChange={handleOnChange}
                >
                    <option key=""></option>
                    <option key="남성"></option>
                    <option key="여성"></option>
                </select>
            </div>
            <div>
                <input
                    name="birth"
                    type="date"
                    value={state.birth}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <textarea
                    name="bio"
                    id=""
                    value={state.bio}
                    onChange={handleOnChange}
                ></textarea>
            </div>
        </div>
    );
}

export default ToDoShorts;
