import { useEffect, useState } from 'react';
import axios from 'axios'

const useGetApi = (API) => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setCoins(response.data);
            console.log(response.data)
        }
        fetchData();
        
    }, []);

    return coins;
}

export default useGetApi;