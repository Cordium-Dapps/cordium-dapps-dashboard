import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import CoinSearch from '../components/CoinSearch';
import axios from 'axios';
import { useEffect, useState } from "react";
import Button from '../components/Button';

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true'

 useEffect(() => {
  const fetchUrl =()=>{
    axios.get(url).then((response) => {
    setCoins(response.data);
  })
  .catch((error)=>{
    console.log(error);
    alert(error.message)
  });
}
fetchUrl()
 
 }, [])

 const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  
  const lastPostIndex = currentPage * coinsPerPage;
  const firstPostIndex = lastPostIndex - coinsPerPage;
  const currentCoins = coins.slice(firstPostIndex, lastPostIndex);

  return (
    <DefaultLayout>
      <div className="flex justify-between">
        <div className="text-4xl text-white">Cordium dApps</div>
      </div>
      <CoinSearch coins={currentCoins}/>
    </DefaultLayout>
  )
}

export default Dashboard;
