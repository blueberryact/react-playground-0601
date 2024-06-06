import { FC, ReactNode } from "react";

type TodoEx = ReactNode | string | JSX.Element;

export interface IArr {
    id: number;
    text: string;
    createDate: number;
}

export interface Ifunctionnar {
    children?: TodoEx;
}

export type TODOFC = FC<Ifunctionnar>;
