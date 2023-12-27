"use client";
import React, { ChangeEvent, useState } from "react";
import style from "../user.module.css";
import CustomInput from "@/shared/components/custom-input/custom-input";
import CustomButton from "@/shared/components/custom-button/custom-button";
import HeadingPrimary from "@/shared/components/heading-primary/heading-primary";
import { CustomInputTypes } from "@/shared/components/custom-input/custom-input.types";
import { CustomButtonTypes } from "@/shared/components/custom-button/custom-button.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/firebase";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user.email);

      if (user) {
        localStorage.setItem("token", user.uid);
        router.push("/calculator");
      }
    } catch (err) {
      console.error("Error signing in:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    await signIn(email, password);
  };

  return (
    <div className={style["main"]}>
      <div className={style["container"]}>
        <HeadingPrimary className="bg-yellow-400">Login Form</HeadingPrimary>
        <form className={style["form"]} onSubmit={handleSubmit}>
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
            Login
          </CustomButton>
          <h6>
            Not yet register?{" "}
            <button
              className="signin__link underline"
              onClick={() => router.push("/user/signup")}
            >
              sign up
            </button>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;
