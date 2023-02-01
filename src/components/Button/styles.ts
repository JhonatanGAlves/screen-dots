import styled from "styled-components";

export const ButtonContainer = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0.5 1rem;
  margin-bottom: 1.5rem;

  width: 9rem;
  height: 4rem;

  border: 1px solid black;
  border-radius: 8px;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    color: white;
    background-color: black;
  }
`;
