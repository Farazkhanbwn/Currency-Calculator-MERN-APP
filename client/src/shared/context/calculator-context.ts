import { createContext, useContext } from "react";
import {
  CalculatorInterface,
  calculatorDefaultValues,
} from "./calculator-interface";

const CalculatorContext = createContext<CalculatorInterface>(
  calculatorDefaultValues
);

export const CalculatorProvider = CalculatorContext.Provider;

export const useCalculatorContext = () => useContext(CalculatorContext);
