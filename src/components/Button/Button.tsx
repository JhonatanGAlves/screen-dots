import { ArrowUDownLeft, ArrowUDownRight } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  type: "undo" | "redo" | "reset";
  value: string;
  onClick?: () => void;
}

export const Button = ({ type, value, onClick }: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      type={type}
    >
      {type === "reset" ? (
        <span>{value}</span>
      ) : type === "undo" ? (
        <>
          <ArrowUDownLeft size={24} />
          <span>{value}</span>
        </>
      ) : (
        <>
          <span>{value}</span>
          <ArrowUDownRight size={24} />
        </>
      )}
    </ButtonContainer>
  );
};
