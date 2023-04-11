import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const handleIncreaseCounter = () => {
    setCounter((state) => state + 1);
  };
  const handleDecreaseCounter = () => {
    setCounter((state) => state - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncreaseCounter}>Aumentar</button>
      <button onClick={handleDecreaseCounter}>Diminuir</button>
    </div>
  );
}
