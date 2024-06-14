import { FC, ReactNode } from "react";

// TChildren
type TodoEx = ReactNode | string | JSX.Element;

// IToDo[]
export interface IArr {
    id: number;
    text: string;
    createDate: number;
}

// IFunctionComp
export interface Ifunctionnar {
    children?: TodoEx;
}

// TTodoFC
export type TODOFC = FC<Ifunctionnar>;
