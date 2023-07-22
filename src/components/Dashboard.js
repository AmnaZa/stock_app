// src/components/Dashboard.js

import { Link } from "react-router-dom";
import stocks from "../data.js";

export default function Dashboard() {
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
              <td>
                {/* Link to individual stock show view */}
                <Link to={`/stocks/${stock.symbol}`} className="stock-link">
                  {stock.name}
                </Link>
              </td>
              <td>{stock.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
