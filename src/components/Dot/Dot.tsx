import { DotContainer } from "./styles";

interface DotProps {
  clientY: number;
  clientX: number;
}

export const Dot = ({ clientY, clientX }: DotProps) => {
  return <DotContainer left={clientX} top={clientY} />;
};
