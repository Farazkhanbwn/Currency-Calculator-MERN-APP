"use client";
import React, { useEffect, useLayoutEffect } from "react";
import styles from "./calculator.module.css";
import History from "./history/page";
import CalculatorForm from "./calculator-form/page";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "@/firebase";

const Calculator = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  };

  const userLogout = () => {
    firebaseAuth.signOut();
  };

  return (
    <div className={styles["calculator-main"]}>
      <button onClick={userLogout}>Logout</button>
      <div className={styles["calculator"]}>
        <CalculatorForm />
        <History />
      </div>
    </div>
  );
};

export default Calculator;
