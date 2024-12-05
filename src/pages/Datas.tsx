import axios from "axios";
import useStockData from "../hooks/MockData/StockData";
import { useCallback, useEffect, useState } from "react";

interface StockData {
  c: number; // Current price
  h: number; // High price
  l: number; // Low price
  o: number; // Open price
  pc: number; // Previous close
  dp: number | null;
}

const Datas = () => {
  // const { data: stockData, isLoading, error } = useStockData(searchInput);

  const [stockSearchInput, setStockSearchInput] = useState<string>("");
  const [singleStockData, setSingleStockData] = useState<any | null>();
  const [stockDataError, setStockDataError] = useState<string | null>(null);

  const getSingleStockData = useCallback(async (stockSearchInput: string) => {
    try {
      const API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
      const url = `https://finnhub.io/api/v1/quote?symbol=${stockSearchInput}&token=${API_KEY}`;
      const response = await axios.get<StockData>(url);
      console.log(response);
      if (response.data.dp === null) {
        setSingleStockData(null);
        setStockDataError("주식이름을 다시한번 확인해봐요");
      } else if (response.status === 200) {
        setSingleStockData(response.data);
        setStockDataError(null);
      }
      console.log("받아옴");
    } catch (error: any) {
      setSingleStockData(null);
      setStockDataError(
        error.response.data.error || "데이터를 받아오는데 실패했읍니다"
      );
      console.log(error.response.data.error);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stockSearchInput) {
        getSingleStockData(stockSearchInput);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [stockSearchInput, getSingleStockData]);

  return (
    <div>
      <h1>Stock Data Search</h1>
      <input
        type="text"
        value={stockSearchInput}
        onChange={(e) =>
          setStockSearchInput(
            e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase()
          )
        }
        placeholder="Enter stock symbol (e.g., AAPL)"
      />
      <button onClick={() => getSingleStockData(stockSearchInput)}>
        Start
      </button>

      {singleStockData && (
        <div>
          <h3>Stock Data for {stockSearchInput}:</h3>
          <p>Current Price: {singleStockData.c}</p>
          <p>High Price: {singleStockData.h}</p>
          <p>Low Price: {singleStockData.l}</p>
          <p>Open Price: {singleStockData.o}</p>
          <p>Previous Close: {singleStockData.pc}</p>
        </div>
      )}

      {stockDataError && <div>ERROR : {stockDataError}</div>}
    </div>
  );
};

export default Datas;
