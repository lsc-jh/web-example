import {CalcRes, PageProps} from "@/common-lib/types";

export default async function Home(props: PageProps) {
  const searchParams = await props.searchParams;
  const { a, b, operator = "+" } = searchParams;
  console.log(a, b, operator);

  const result = await fetch(
    `http://localhost:8000/calculate/${a}/${b}?operator=${encodeURIComponent(operator || "+")}`,
  );

  const message: CalcRes = await result.json();

  return (
    <div>
      <h1 className="text-lg font-bold mb-2">MI-2</h1>
      <hr />
      <br />
      <p>a: {message.a}</p>
      <p>b: {message.b}</p>
      <p>operator: {message.operator}</p>
      <p>result: {message.result}</p>
    </div>
  );
}
