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
    const newDot = { clientX: event.clientX, clientY: event.clientY };

    setDotList((prev) => [...prev, newDot]);
    setUndoDotList([]);
  }

  function handleUndo() {
    const lastDot = dotList[dotList.length - 1];
    const newDotList = dotList.slice(0, dotList.length - 1);

    setUndoDotList((prev) => [...prev, lastDot]);
    setDotList(newDotList);
  }

  function handleRedo() {
    if (undoDotList.length > 0) {
      const lastUndidDot = undoDotList[undoDotList.length - 1];
      const newUndoDotList = undoDotList.slice(0, undoDotList.length - 1);

      setDotList((prev) => [...prev, lastUndidDot]);
      setUndoDotList(newUndoDotList);
    }
  }

  function handleReset() {
    setDotList([]);
    setUndoDotList([]);
  }

  return (
    <HomeContainer onClick={handleClick}>
      {dotList.map((dot) => (
        <Dot clientX={dot.clientX} clientY={dot.clientY} />
      ))}
      <ButtonsContainer>
        {(dotList.length > 0 || undoDotList.length > 0) && (
          <Button type="reset" value="RESET" onClick={handleReset} />
        )}
        {dotList.length > 0 && (
          <Button type="undo" value="UNDO" onClick={handleUndo} />
        )}
        {undoDotList.length > 0 && (
          <Button type="redo" value="REDO" onClick={handleRedo} />
        )}
      </ButtonsContainer>
    </HomeContainer>
  );
};
