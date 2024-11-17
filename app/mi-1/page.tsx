import {CalcRes, PageProps} from "@/common-lib/types";
import NumberInputs from "@/app/mi-1/number-inputs";

export default async function Home(props: PageProps) {
  const searchParams = await props.searchParams;
  const
    { a, b, operator = "+" } = searchParams;

  if(isNaN(a) || isNaN(b)) {
    return (
      <div>
        <h1 className="text-lg font-bold mb-2">MI-1</h1>
        <hr />
        <NumberInputs />
        <br />
        <p>Invalid input</p>
      </div>
    );
  }

  const result = await fetch(
    `http://localhost:8000/calculate/${a}/${b}?operator=%2B`,
  );

  const message: CalcRes = await result.json();

  return (
    <div>
      <h1 className="text-lg font-bold mb-2">MI-1</h1>
      <hr />
      <NumberInputs />
      <br />
      <p>a: {message.a}</p>
      <p>b: {message.b}</p>
      <p>operator: {message.operator}</p>
      <p>result: {message.result}</p>
    </div>
  );
}
