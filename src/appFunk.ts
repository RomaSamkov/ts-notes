// type addFunc = (n1: number, n2: number) => number;
interface addFunc {
  (n1: number, n2: number): number;
}

const foo: addFunc = (a, b) => {
  return a + b;
};
