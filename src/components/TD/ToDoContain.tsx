import { useState } from "react";
import styled from "styled-components";
import ToDoContain from "./ToDo";
import { TODOFC } from "../../types/type";

const ToDoContainer: TODOFC = ({ children }) => {
    return <div>{children}</div>;
};

export default ToDoContainer;
