import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {

  const [holdingsData, setHoldingsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getHoldingsData").then((res) => {
      console.log(res.data);
      setHoldingsData(res.data);
    })
  }, [])

  const labels = holdingsData.map((stock) => stock["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Priice',
        data: holdingsData.map((stock) => stock["price"]),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  }

  return (
    <>
      <h3 className="title">Holdings ({holdingsData.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdingsData.map((stock, index) => {
              const name = stock.name;
              const qty = stock.qty;
              const avg = stock.avg;
              const price = stock.price;
              const net = stock.net;
              const day = stock.day;
              const isLoss = stock.isLoss ?? false;

              const curValue = price * qty;
              const pnl = curValue - avg * qty;
              const isProfit = pnl >= 0;
              const pnlClass = isProfit ? "profit" : "loss";
              const dayClass = isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={pnlClass}>{pnl.toFixed(2)}</td>
                  <td className={pnlClass}>{net}</td>
                  <td className={dayClass}>{day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* VerticalGraph Display */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
