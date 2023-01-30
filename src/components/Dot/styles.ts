import styled from "styled-components";

export const DotContainer = styled.span<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: black;
`;
