import React ,{ useState , useEffect } from "react";
import axios from "axios";

const Positions = () => {

  const [ positionsData , setPositionsData ] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getPositionsData").then((res) => {
      console.log(res.data);
      setPositionsData(res.data);
    })
  } , [])

  return (
    <>
      <h3 className="title">Positions ({positionsData.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positionsData.map((stock, index) => {
              const product = stock.product;
              const name = stock.name;
              const qty = stock.qty;
              const avg = stock.avg;
              const price = stock.price;
              const isLoss = stock.isLoss ?? false;

              const curValue = price * qty;
              const pnl = curValue - avg * qty;
              const isProfit = pnl >= 0;
              const pnlClass = isProfit ? "profit" : "loss";
              const dayClass = isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{product}</td>
                  <td>{name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={pnlClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;