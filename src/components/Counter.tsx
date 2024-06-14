import { IFunctionalComponent } from "../types/modal";

function Counter({ children }: IFunctionalComponent) {
    return <div>{children}</div>;
}

export default Counter;
