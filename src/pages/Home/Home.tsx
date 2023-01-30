import { useState } from "react";
import { HomeContainer } from "./styles";
import { Dot } from "../../components/Dot/Dot";

type DotListType = {
  clientX: number;
  clientY: number;
};

export const Home = () => {
  const [dotList, setDotList] = useState<DotListType[]>([]);

  function handleClick(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;

    setDotList((prev) => {
      const newDot = { clientX, clientY };

      return [...prev, newDot];
    });
  }

  return (
    <HomeContainer onClick={(e) => handleClick(e)}>
      {dotList.map((dot) => (
        <Dot clientX={dot.clientX} clientY={dot.clientY} />
      ))}
    </HomeContainer>
  );
};
