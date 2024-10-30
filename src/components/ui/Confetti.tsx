"use client";

import { type FC } from "react";
import ReactConfetti from "react-confetti";
import { useConfetti } from "@/hooks/use-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

const Confetti: FC = () => {
  const { width, height } = useWindowSize();
  const { confetti } = useConfetti();

  return (
    <>
      {confetti.map((id) => (
        <ReactConfetti
          key={id}
          width={width}
          height={height}
          numberOfPieces={800}
          recycle={false}
          tweenDuration={10_000}
          initialVelocityY={-7}
          className="!z-200 !h-screen !w-screen"
        />
      ))}
    </>
  );
};

export default Confetti;
