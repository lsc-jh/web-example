type CalcRes = {
  a: number;
  b: number;
  operator: string;
  result: string | number;
};

type PageProps = {
  searchParams: {
    a: number;
    b: number;
    operator: string | undefined;
  };
};

export default async function Home({ searchParams }: PageProps) {
  const { a, b, operator = "+" } = await searchParams;
  console.log(a, b, operator);

  const result = await fetch(
    `http://localhost:8000/calculate/${a}/${b}?operator=${encodeURIComponent(operator || "+")}`,
  );

  const message: CalcRes = await result.json();

  return (
    <div>
      <p className="text-lg font-bold">Hello</p>
      <hr />
      <br />
      <p>a: {message.a}</p>
      <p>b: {message.b}</p>
      <p>operator: {message.operator}</p>
      <p>result: {message.result}</p>
    </div>
  );
}
