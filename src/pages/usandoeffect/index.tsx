import { useEffect, useState } from "react";

export default function UsingEffect() {
  const [counter, setCounter] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (Math.sign(counter) === -1) {
      setMessage("Número Negativo");
    } else {
      setMessage("Número positivo ou zero");
    }
  }, [counter]);

  return (
    <div>
      <h1>{message}</h1>
      <span>{counter}</span>
      <button onClick={() => setCounter((state) => state + 1)}>Aumentar</button>
      <button onClick={() => setCounter((state) => state - 1)}>Diminuir</button>
    </div>
  );
}
