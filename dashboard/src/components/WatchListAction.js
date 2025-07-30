import React from 'react';
import axios from 'axios';

import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, DeleteOutlined, MoreHorizOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import GeneralContext from './GeneralContext';

const WatchListAction = ({ watchlistId, stockName }) => {

    const generalContext = useContext(GeneralContext);

    const handelBuyClick = () => {
        generalContext.openBuyWindow(stockName);
    }

    const handleSellClick = () => {
        axios.delete(`http://localhost:8080/deleteOrder/${stockName}`)
            .then((res) => console.log("Order deleted:", res.data))
            .catch((err) => console.error("Failed to delete order", err));
    };

    const handleDeleteClick = () => {
        axios.delete(`http://localhost:8080/deleteWatchlist/${watchlistId}`)
            .then((res) => {
                console.log("Watchlist item deleted:", res.data);
                generalContext.refreshWatchlist?.(); // if you have it
            })
            .catch((err) => console.error("Failed to delete from watchlist", err));
    };

    return (
        <span className='actions'>
            <span>
                <Tooltip
                    title='Buy' placement='top' arrow onClick={handelBuyClick} slots={{
                        transition: Grow,
                    }}
                    slotProps={{
                        transition: { timeout: 600 },
                    }}>
                    <button className='buy'>B</button>
                </Tooltip>
            </span>
            <span>
                <Tooltip
                    title='Sell' placement='top' arrow slots={{
                        transition: Grow,
                    }}
                    slotProps={{
                        transition: { timeout: 600 },
                    }}>
                    <button onClick={handleSellClick} className='sell'>S</button>
                </Tooltip>
            </span>
            <span>
                <Tooltip
                    title='Analytics' placement='top' arrow slots={{
                        transition: Grow,
                    }}
                    slotProps={{
                        transition: { timeout: 600 },
                    }}>
                    <button className='neutral'>
                        <BarChartOutlined className='icon' />
                    </button>
                </Tooltip>
            </span>
            <span>
                <Tooltip
                    title='Delete' placement='top' arrow slots={{
                        transition: Grow,
                    }}
                    slotProps={{
                        transition: { timeout: 600 },
                    }}>
                    <button onClick={handleDeleteClick} className='neutral'>
                        <DeleteOutlined className='icon' />
                    </button>
                </Tooltip>
            </span>
            <span>
                <Tooltip
                    title='More' placement='top' arrow slots={{
                        transition: Grow,
                    }}
                    slotProps={{
                        transition: { timeout: 600 },
                    }}>
                    <button className='neutral'>
                        <MoreHorizOutlined className='icon' />
                    </button>
                </Tooltip>
            </span>
        </span>
    )
}

export default WatchListAction;