import { summ } from "./test";

//В любом тесте 3 составляющие: данные, дейчтвие, ожидаемый результат

//data

let a: number;
let b: number;

//перед каждым тестом присваиваем занчения, чтобы не сломать тест если необходимо изменить переменные внутри тестов
beforeEach(() => {
  a = 2;
  b = 5;
});

test("Summ correct?", () => {
  //action

  const result = summ(a, b);

  //expect result

  expect(result).toBe(11);
});

// test("Multiply correct?", () => {
//   let a: number = 2;
//   let b: number = 5;

//   const result = mult(a, b);

//   expect(result).toBe(10);
// });
