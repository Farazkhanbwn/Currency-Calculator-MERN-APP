import { useState } from "react";

export const useCalculation = () => {
  const [result, setResult] = useState<number>();
  const [error, setError] = useState({ number1: "", number2: "" });

  const performOperation = (
    number1: number,
    number2: number,
    operation: "+" | "-" | "*" | "/"
  ) => {
    const newError = {
      number1: isNaN(number1) ? "Please enter a valid number" : "",
      number2: isNaN(number2) ? "Please enter a valid number" : "",
    };

    if (!isNaN(number1) && !isNaN(number2)) {
      let resultValue: number | undefined;

      switch (operation) {
        case "+":
          resultValue = number1 + number2;
          break;
        case "-":
          resultValue = number1 - number2;
          break;
        case "*":
          resultValue = number1 * number2;
          break;
        case "/":
          resultValue = number2 !== 0 ? number1 / number2 : 0;
          break;
        default:
          resultValue = undefined;
      }

      setResult(resultValue);
      setError({ number1: "", number2: "" });
    } else {
      setError(newError);
      setResult(undefined);
    }
  };

  return { result, error, performOperation };
};
