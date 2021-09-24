import { Color } from "@material-ui/core";

interface CustomButtonProps{
    variant:string;
    color?: "inherit" | "primary" | "secondary" | "default" | undefined
    className:object;
    startIcon:object;
    text:string;
};