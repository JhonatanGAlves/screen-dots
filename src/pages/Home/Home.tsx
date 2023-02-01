import { useState } from "react";
import { ButtonsContainer, HomeContainer } from "./styles";
import { Dot } from "../../components/Dot/Dot";
import { Button } from "../../components/Button/Button";

type DotListType = {
  clientX: number;
  clientY: number;
};

export const Home = () => {
  const [dotList, setDotList] = useState<DotListType[]>([]);
  const [undoDotList, setUndoDotList] = useState<DotListType[]>([]);

  function handleClick(event: any) {
    const clientX = event.clientX;
    const clientY = event.clientY;

    setDotList((prev) => {
      const newDot = { clientX, clientY };

      return [...prev, newDot];
    });
    setUndoDotList([]);
  }

  function handleUndo() {
    const lastDot = dotList[dotList.length - 1];
    const newDotList = dotList.slice(0, dotList.length - 1);

    setUndoDotList((prev) => [...prev, lastDot]);
    setDotList(newDotList);
  }

  return (
    <HomeContainer onClick={handleClick}>
      {dotList.map((dot) => (
        <Dot clientX={dot.clientX} clientY={dot.clientY} />
      ))}
      <ButtonsContainer>
        <Button type="undo" value="UNDO" onClick={handleUndo} />
        <Button type="redo" value="REDO" />
      </ButtonsContainer>
    </HomeContainer>
  );
};
