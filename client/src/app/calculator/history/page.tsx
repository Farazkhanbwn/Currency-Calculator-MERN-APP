import HeadingPrimary from "@/shared/components/heading-primary/heading-primary";
import React, { useLayoutEffect, useState } from "react";
import styles from "../calculator.module.css";
import CalculatorService from "@/shared/services/calculator-service";

interface HistoryItem {
  _id: string;
  history: string;
  uid: string;
  __v: number;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const getUserHistory = async () => {
    const uid = localStorage.getItem("token");
    const { data, error } = await CalculatorService.getAllHistory({ uid });
    setHistory(data);
  };

  const deleteHistoryItem = async (id: string) => {};

  useLayoutEffect(() => {
    getUserHistory();
  }, []);
  return (
    <div className={styles["calculator-history"]}>
      <HeadingPrimary>History</HeadingPrimary>
      <div>
        {history.map((item, index) => (
          <div key={index}>
            <h1 className={styles["history"]}>{item.history}</h1>
            <button
              className="mb-8 font-semibold bg-slate-500 p-2 rounded-md text-gray-200"
              onSubmit={() => deleteHistoryItem(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
