export type CalcRes = {
  a: number;
  b: number;
  operator: string;
  result: string | number;
};

export type PageProps = {
  searchParams: {
    a: number;
    b: number;
    operator: string | undefined;
  };
};

