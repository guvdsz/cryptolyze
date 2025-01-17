import "./Crypto.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, defaults } from 'chart.js';
import { Line } from "react-chartjs-2";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import OverviewCard from "../components/OverViewCard";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function Crypto() {
  const [coin, setCoin] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-XHU2dTRjVfMr7d8LMy9uo8Wv`
        );
        const data = await res.json();
        setCoin(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function getChartData() {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`)
      const data = await res.json()
      setDailyData(data)
      } catch(error) {
        console.log(error)
      }
    }
    getChartData()
  }, [])
  if (!coin || !dailyData) return <div className="loader"></div>  ;
  const chartData = {
    labels: dailyData.prices.map((price) => new Date(price[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${coin.name} Price (USD)`,
        data: dailyData.prices.map((price) => price[1]),
        borderColor: '#fff',
        backgroundColor: '#111827',
        pointRadius: 5,
        pointHoverRadius: 7.5,
      },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: false,
        ticks: {
          padding: 10,
          color: 'white', 
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Price Chart (Last 30 Days)`,
        color: 'white',
        font: {
          size: 16,
        },
        padding: {
          bottom: 50
        }
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 50,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)', 
        titleColor: 'white', 
        bodyColor: 'white', 
        titleFont: {
          size: 16, 
        },
        bodyFont: {
          size: 14, 
        },
        padding: 10, 
      },
    }
  };
  return (
    <section className="crypto-section">
      <div className="crypto-header">
      <img src={coin.image.large} alt={coin.name} />
        <div className="crypto-name">
        <h1>
          {coin.name} ({coin.symbol.toUpperCase()})
        </h1>
        </div>
        <div className="crypto-price">
          <p>
            $
            {coin.market_data.current_price.usd.toLocaleString("en-US", {
              hour12: false,
            })}
          </p>
          <p className={`trend ${coin.market_data.price_change_percentage_24h > 0 ? "positive" : "negative"}`}>
            {coin.market_data.price_change_percentage_24h > 0.0 ? (
              <IoMdTrendingUp />
            ) : (
              <IoMdTrendingDown />
            )}
            {coin.market_data.price_change_percentage_24h < 0
              ? (coin.market_data.price_change_percentage_24h * -1).toFixed(2)
              : coin.market_data.price_change_percentage_24h.toFixed(2)}
            %
          </p>
        </div>
      </div>
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
      <OverviewCard title="Market Cap" value={`$${coin.market_data.market_cap.usd.toLocaleString("en-US", {
              hour12: false,
            })}`}/>
      <OverviewCard title="Circulating Suply" value={`$${coin.market_data.circulating_supply.toLocaleString("en-US", {
              hour12: false,
            })}`}/>
      <OverviewCard title="Market Cap Rank" value={coin.market_data.market_cap_rank}/>
    </section>
  );
}
