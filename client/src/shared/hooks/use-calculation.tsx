import { useState } from "react";
import CalculatorService from "../services/calculator-service";

enum CalculatorOperation {
  ADD = "+",
  DIVIDE = "/",
  SUBTRACT = "-",
  MULTIPLY = "*",
}

export const useCalculation = () => {
  const [result, setResult] = useState<number>();
  const [error, setError] = useState({ number1: "", number2: "" });

  const performOperation = async (
    number1: number,
    number2: number,
    operation: "+" | "-" | "*" | "/"
  ) => {
    const token = localStorage.getItem("token");
    const newError = {
      number1: isNaN(number1) ? "Please enter a valid number" : "",
      number2: isNaN(number2) ? "Please enter a valid number" : "",
    };

    if (!isNaN(number1) && !isNaN(number2)) {
      let resultValue: number | undefined;

      const calculateResult = {
        [CalculatorOperation.ADD]: () => number1 + number2,
        [CalculatorOperation.DIVIDE]: () => number1 / number2,
        [CalculatorOperation.SUBTRACT]: () => number1 - number2,
        [CalculatorOperation.MULTIPLY]: () => number1 * number2,
      };

      resultValue = calculateResult[operation]?.();

      setResult(resultValue);
      setError({ number1: "", number2: "" });
      await CalculatorService.addHistory({
        history: `${number1} ${operation} ${number2} = ${resultValue}`,
        uid: `${token}`,
      });
    } else {
      setError(newError);
      setResult(undefined);
    }
  };

  return { result, error, performOperation };
};
