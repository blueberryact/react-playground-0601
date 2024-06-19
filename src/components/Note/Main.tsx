import userEvent from "@testing-library/user-event";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { FC } from "react";

const Main: React.FC = () => {
    const [notes, setNotes] = useState("");
    const saveNotes = (notes: string) => {
        localStorage.setItem("notes", JSON.stringify(notes));
    };
    const getSaveNotes = () => {
        const notesJSON = localStorage.getItem("notes");
        return notesJSON ? JSON.parse(notesJSON) : "";
    };

    useEffect(() => {
        const savedNotes = getSaveNotes();
        setNotes(savedNotes);
    }, []);
    useEffect(() => {
        saveNotes(notes);
    }, [notes]);

    const [number, setNumber] = useState(0);

    const [toggle, setToggle] = useState(true);

    const changeFunction = useCallback(() => {
        console.log(`이것의 값은 : ${number}`);
    }, [number]);

    useEffect(() => {
        console.log("변하는중");
    }, [changeFunction]);

    const [size, setSize] = useState(100);
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log("box sizing Adjustment");
        setStyle({
            background: "#000",
            width: `${size}px`,
            height: `${size}px`,
            transition: `all 2s`,
        });
    }, [size]);

    return (
        <div>
            <div style={style}></div>
            <input
                type="number"
                value={size}
                onChange={(e) => {
                    setSize(Number(e.target.value));
                }}
            />

            <div>
                {/* <input type="number" value={number} onChange={changeFunction} /> */}
            </div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {toggle.toString()}
            </button>
            <button onClick={changeFunction}>x</button>
        </div>
    );
};

export default Main;
