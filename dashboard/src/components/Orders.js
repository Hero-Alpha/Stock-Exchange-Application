import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getOrdersData").then((res) => {
      console.log(res.data);
      setOrdersData(res.data);
    })
  }, [])

  return (
    <div className="orders">
      {ordersData.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({ordersData.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((stock, index) => {
                  const name = stock.name;
                  const qty = stock.qty;
                  const price = stock.price;

                  return (
                    <tr key={index}>
                      <td>{name}</td>
                      <td>{qty}</td>
                      <td>{price.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;