import HttpClient from "./http-client";

enum CalculatorHistory {
  DELETE_HISTORY = "/calculator/deleteHistoryItem/:id",
  GET_ALL = "/calculator/getAllHistory",
  ADD_HISTORY = "/calculator/addHistory",
}

type FormDataType = Record<
  string,
  string | number | FormData | null | string[]
>;

class CalculatorService extends HttpClient {
  static async addHistory(body: FormDataType) {
    console.log("body", body);
    const { data, error } = await this.post(
      CalculatorHistory.ADD_HISTORY,
      body
    );
    return { data, error };
  }

  static async deleteHistory(id: string, token: string) {
    const { data, error } = await this.post(
      CalculatorHistory.DELETE_HISTORY.replace(":id", id),
      {},
      {
        ...(token && { authorization: `Bearer ${token}` }),
      }
    );
    return { data, error };
  }

  static async getAllHistory(body: FormDataType) {
    const { data, error } = await this.post(CalculatorHistory.GET_ALL, body);
    return { data, error };
  }
}

export default CalculatorService;
