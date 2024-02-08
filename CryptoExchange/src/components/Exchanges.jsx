import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div className="exchange_container">
      <h1>Exchanges</h1>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {exchanges.map((item) => (
            <ExchangeCard
              key={item.id}
              name={item.name}
              image={item.image}
              rank={item.trust_score_rank}
              url={item.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Exchanges;
