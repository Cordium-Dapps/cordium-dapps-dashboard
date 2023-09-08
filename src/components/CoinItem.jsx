// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
// import { UserAuth } from "../contexts/AuthContext";
// import { db } from "../firebase";

const CoinItem = ({ coin }) => {
  return (

    <tr className="h-[80px] border-b overflow-hidden">
      <td>
        <AiFillStar className='cursor-pointer'  />
      </td>
    
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>
        {coin.current_price.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        {coin.total_volume.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        {coin.market_cap.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
