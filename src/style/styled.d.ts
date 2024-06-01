import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            primary: "#64FFC8";
            sub: "#FFC8C8";
            black: "#101010";
            white: "#ffffff";
            red: "#ff4477";
        };
        border: {
            basic: "1px solid #ccc;";
        };
        font: {
            xl: "1.5rem";
            lg: "1.25rem";
            md: "1rem";
            sm: "0.8rem";
            xs: "0.6rem";
            family: string;
        };
    }
}
