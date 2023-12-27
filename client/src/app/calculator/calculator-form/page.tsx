"use client";
import React, { ChangeEvent, useState } from "react";
import CustomInput from "@/shared/components/custom-input/custom-input";
import { CustomInputTypes } from "@/shared/components/custom-input/custom-input.types";
import HeadingPrimary from "@/shared/components/heading-primary/heading-primary";
import styles from "../calculator.module.css";
import { CustomButtonTypes } from "@/shared/components/custom-button/custom-button.types";
import CustomButton from "@/shared/components/custom-button/custom-button";
import { useCalculation } from "@/shared/hooks/useCalculation";

const CalculatorForm = () => {
  const { result, error, performOperation } = useCalculation();

  const [numbers, setNumbers] = useState<Record<string, number>>({
    number1: 0,
    number2: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const numericValue = parseFloat(value);

    setNumbers((prevState) => ({
      ...prevState,
      [name]: numericValue || 0,
    }));
  };

  const handleOperationClick = (operation: "+" | "-" | "*" | "/") => {
    const { number1, number2 } = numbers;
    performOperation(number1, number2, operation);
  };

  return (
    <div className={styles["calculator-input-form"]}>
      <HeadingPrimary>Calculator</HeadingPrimary>

      <CustomInput
        type={CustomInputTypes.NUMBER}
        placeholder="Enter First Value"
        name="number1"
        value={numbers.number1}
        onChange={handleInputChange}
      />
      <CustomInput
        type={CustomInputTypes.NUMBER}
        placeholder="Enter Second Number"
        name="number2"
        value={numbers.number2}
        onChange={handleInputChange}
      />

      {/* <label htmlFor="selectBox">Select an option:</label>
      <select
        id="selectBox"
        name="selectedValue"
        // value={formData.currencyValue}
        // onChange={handleSelectChange}
        className="bg-yellow-700"
      >
        <option value="option1" className="bg-black">
          Option 1
        </option>
        <option value="option2">Option 2</option>
      </select> */}

      <div className="flex justify-evenly">
        <CustomButton
          type={CustomButtonTypes.PRIMARY}
          onClick={() => handleOperationClick("+")}
          className="w-40"
        >
          Add
        </CustomButton>
        <CustomButton
          type={CustomButtonTypes.PRIMARY}
          onClick={() => handleOperationClick("-")}
          className="w-40"
        >
          Subtract
        </CustomButton>
      </div>
      <div className="flex justify-evenly">
        <CustomButton
          type={CustomButtonTypes.PRIMARY}
          className="w-40"
          onClick={() => handleOperationClick("*")}
        >
          Multiply
        </CustomButton>
        <CustomButton
          type={CustomButtonTypes.PRIMARY}
          className="w-40"
          onClick={() => handleOperationClick("/")}
        >
          Divide
        </CustomButton>
      </div>
      <h1 className="mb-6 text-4xl font-semibold">Result : {result}</h1>
    </div>
  );
};

export default CalculatorForm;
