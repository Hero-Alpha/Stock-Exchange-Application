import React from 'react';
import { useState } from 'react';
import WatchListAction from './WatchListAction';

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const WatchListItem = ({ stock }) => {

    const [showListActions, setShowListActtions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowListActtions(true);
    }

    const handleMouseLeave = (e) => {
        setShowListActtions(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='item'>
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className='itemInfo'>
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className='down' />
                    ) : (
                        <KeyboardArrowUp className='up ' />
                    )}
                    <span className='price'>{stock.price}</span>
                </div>
            </div>
            {showListActions && <WatchListAction watchlistId={stock._id}
                stockName={stock.name} />}
        </li>
    )
}

export default WatchListItem;