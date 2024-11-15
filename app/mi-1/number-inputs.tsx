import Link from "next/link";
import React from "react";

export default function NumberInputs() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [operator, setOperator] = React.useState("+");

  return (
    <div className={"flex flex-col gap-2"}>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        className={"mb-2"}
      />
      <Link href={`/mi-1?a=${a}&b=${b}&operator=${operator}`}>Calculate</Link>
    </div>
  );
}