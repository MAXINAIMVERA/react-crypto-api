import React from 'react';
import '../styles/CoinRow.css'

const CoinRow = ({coin}) => {
    return (     
            <tr>
                <td> {coin.market_cap_rank} </td>
                <td>
                    <img src={coin.image} alt={coin.id} className='coin-image'/>
                    <span>{coin.name}</span> 
                    <span className='symbol'>{coin.symbol.toUpperCase()}</span>
                </td>
                <td> {coin.current_price} </td>
                <td className={coin.price_change_percentage_24h > 0 ? 'positive-price' : 'negative-price'} >
                    {coin.price_change_percentage_24h} 
                </td>     
            </tr>
    );
}

export default CoinRow;