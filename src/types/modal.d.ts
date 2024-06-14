import { FC, ReactNode } from "react";

export type TChildrenComponent = ReactNode | JSX.Element | string;

// 확장이 가능하다,
export interface IFunctionalComponent {
    children?: TChildrenComponent;
}

export interface IFunctionalComponent {
    whatIsThis?: string;
}

export type TFC = FC<IFunctionalComponent>;
