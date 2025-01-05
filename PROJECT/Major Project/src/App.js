import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    fetchCryptocurrencies();
  }, []);

  useEffect(() => {
    if (selectedCrypto) {
      fetchCryptoData(selectedCrypto);
    }
  }, [selectedCrypto]);

  const fetchCryptocurrencies = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "USD",
            order: "market_cap_desc",
            per_page: 25,
            page: 1,
          },
        }
      );

      setCryptoList(response.data);
    } catch (error) {
      console.error("Error fetching cryptocurrency list:", error);
    }
  };

  const fetchCryptoData = async (cryptoId) => {
    try {
      const marketResponse = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`,
        {
          params: {
            vs_currency: "USD",
            days: 7, // 7-day data
          },
        }
      );

      const prices = marketResponse.data.prices;
      const chartData = {
        labels: prices.map((price) => {
          const date = new Date(price[0]);
          return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        }),
        datasets: [
          {
            label: `${cryptoId.toUpperCase()} Price (USD)`,
            data: prices.map((price) => price[1]),
            borderColor: "#ff7f50",
            backgroundColor: "rgb(255, 255, 255)",
            tension: 0.4,
          },
        ],
      };

      setCryptoData(chartData);
    } catch (error) {
      console.error("Error fetching cryptocurrency data:", error);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Cryptocurrency Tracker</h1>

      <div className="crypto-list">
        {cryptoList.map((crypto) => (
          <div
            key={crypto.id}
            className="crypto-item"
            onClick={() => setSelectedCrypto(crypto.id)}
          >
            <img src={crypto.image} alt={crypto.name} className="crypto-icon" />
            <div className="crypto-info">
              <h2>{crypto.name}</h2>
              <p>${crypto.current_price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCrypto && cryptoData ? (
        <div className="chart-section">
          <h2>{selectedCrypto.toUpperCase()} Price Chart</h2>
          <Line data={cryptoData} />
        </div>
      ) : selectedCrypto ? (
        <p className="loading">Loading chart...</p>
      ) : (
        <p className="instruction">
          Click on a cryptocurrency to view its graph.
        </p>
      )}
    </div>
  );
}

export default App;
