import HeadingPrimary from "@/shared/components/heading-primary/heading-primary";
import React from "react";
import styles from "../calculator.module.css";

const History = () => {
  return (
    <div className={styles["calculator-history"]}>
      <HeadingPrimary>History</HeadingPrimary>
    </div>
  );
};

export default History;
