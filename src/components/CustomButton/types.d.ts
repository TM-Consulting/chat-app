import { Color } from "@material-ui/core";
import { ReactNode } from "react";

interface CustomButtonProps {
  color?: color;
  text: string;
  startIcon: ReactNode;
  className?: string;
  onClick?: (e) => void;
}
