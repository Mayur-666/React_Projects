import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Card from "./Card";
import { server } from "../main";

const Coins = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=inr`
        );
        setLoading(false);
        setCoinsData(data);
      } catch (e) {
        alert("Something snapped! Please try again later.");
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="main">
      {loading ? (
        <Loader />
      ) : (
        coinsData.map((item) => (
          <Card
            key={item.id}
            pic={item.image}
            name={item.name}
            price={item.current_price}
            symbol={item.symbol}
          />
        ))
      )}
    </div>
  );
};

export default Coins;
