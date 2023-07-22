// src/components/Stock.js

import { useParams } from "react-router-dom";
import stocks from "../data.js";

export default function Stock (){
  const { symbol } = useParams();
  const stock = stocks.find((s) => s.symbol === symbol);

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div className="stock-details">
      <h2>{stock.name}</h2>
      <p>Symbol: {stock.symbol}</p>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
};