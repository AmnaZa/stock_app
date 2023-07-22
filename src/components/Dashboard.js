// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
      const apiKey = '53341a9c233af54614465f5ffa614814'; 
      const baseUrl = "https://financialmodelingprep.com/api/v3/quote/";
  
      axios
        .get(`${baseUrl}?apikey=${apiKey}`)
        .then((response) => {
          setStocks(response.data);
        })
        .catch((error) => {
          console.error("Error fetching stock data:", error);
        });
    }, []);
  
    return (
      <div className="dashboard">
        <h1>Stocks Dashboard</h1>
        <table className="stock-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.name}</td>
                <td>{stock.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  