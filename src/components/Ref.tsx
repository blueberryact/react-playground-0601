import { useRef, ChangeEvent, useState } from "react";

function Ref() {
    const [text, setText] = useState("");
    const textRef = useRef<HTMLInputElement>(null);
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
        console.log(e.currentTarget.value);
    };
    const handleOnClick = () => {
        if (text.length < 5) {
            if (textRef.current) {
                textRef.current.focus();
            }
        }
        alert(text);
        setText("");
    };

    const onBlurInput = () => {
        if (text.length < 5) {
            textRef.current?.focus();
        }
    };

    return (
        <div>
            <input
                ref={textRef}
                value={text}
                type="text"
                onChange={onChangeInput}
                onBlur={onBlurInput}
            />
            <button onClick={handleOnClick}>x</button>
        </div>
    );
}

export default Ref;
