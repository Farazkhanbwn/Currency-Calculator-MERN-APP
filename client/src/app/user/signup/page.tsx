"use client";
import React, { ChangeEvent, useState } from "react";
import style from "../user.module.css";
import HeadingPrimary from "@/shared/components/heading-primary/heading-primary";
import CustomInput from "@/shared/components/custom-input/custom-input";
import { CustomInputTypes } from "@/shared/components/custom-input/custom-input.types";
import CustomButton from "@/shared/components/custom-button/custom-button";
import { CustomButtonTypes } from "@/shared/components/custom-button/custom-button.types";
import { firebaseAuth } from "../../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    currencyValue: "USD",
  });

  const signUp = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      if (user) {
        router.push("/");
      }
    } catch (error) {
      console.log("SignUp error : ", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    await signUp(email, password);
  };

  return (
    <div className={style["main"]}>
      <div className={style["container"]}>
        <HeadingPrimary className="bg-yellow-400">SignUp Form</HeadingPrimary>
        <form className={style["form"]} onSubmit={handleSubmit}>
          <CustomInput
            label="Name"
            name="name"
            type={CustomInputTypes.TEXT}
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <CustomInput
            label="E-mail"
            name="email"
            type={CustomInputTypes.EMAIL}
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <CustomInput
            label="Password"
            name="password"
            type={CustomInputTypes.PASSWORD}
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <CustomButton
            type={CustomButtonTypes.PRIMARY}
            className="font-medium text-xl"
          >
            SignUp
          </CustomButton>
          <h6 className="text-xl font-medium">
            Already Have An Account?
            <button
              className="signin__link underline"
              onClick={() => router.push("/")}
            >
              Login
            </button>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
