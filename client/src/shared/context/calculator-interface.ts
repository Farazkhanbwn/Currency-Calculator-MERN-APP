export interface CalculatorInterface {
  loading: boolean;
  addNumbers: (number1: number, number2: number) => number;
  subtractNumbers: (number1: number, number2: number) => number;
  dividerNumber: (number1: number, number2: number) => number;
  multiplyNumbers: (number1: number, number2: number) => number;
  result: number;
  calculationError: Record<string, string>;
}

export const calculatorDefaultValues: CalculatorInterface = {
  loading: false,
  addNumbers: (number1: number, number2: number) => number1 + number2,
  subtractNumbers: (number1: number, number2: number) => number1 - number2,
  dividerNumber: (number1: number, number2: number) => number1 / number2,
  multiplyNumbers: (number1: number, number2: number) => number1 * number2,
  result: 0,
  calculationError: {},
};
