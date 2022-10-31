import React from 'react';
import useGetApi from '../hooks/useGetApi'
import CoinRow from './CoinRow';
import '../styles/CoinsList.css'
const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

const CoinsList = () => {    
    const coins = useGetApi(API)

    return(
       
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>24h Change</td>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        {coins.map(coin => (
                            <CoinRow coin={coin} key={coin.id} />
                        ))}
                    
                </tbody>
            </table>
       
    )
};

export default CoinsList;