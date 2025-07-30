import React, { useState, useEffect } from 'react';
import WatchListItem from "./WatchListItem.js";
import axios from 'axios';
import { DoughnutGraph } from './DoughnutGraph.js';

const WatchList = () => {

  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getWatchlistData").then((res) => {
      console.log(res.data);
      setWatchlistData(res.data);
    })
  }, [])
  const label = watchlistData.map((stock) => stock["name"]);
  const watchData = watchlistData.map((stock) => stock["price"]);
  const data = {
    labels: label,
    datasets: [
      {
        label: 'Price',
        data: watchData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }
    ]
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlistData.length} / 50</span>
      </div>

      <ul className="list">
        {watchlistData.map((stock) => {
          return (
            <WatchListItem stock={stock} key={stock._id} />
          )
        })}
      </ul>
      {/* Doughnut Graph Plotting */}
      <DoughnutGraph data={data} />
    </div>
  );
};

export default WatchList;

