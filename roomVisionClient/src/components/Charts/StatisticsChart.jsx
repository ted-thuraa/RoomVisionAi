import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import { Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options = {
    maintainAspectRatio: false,
    interaction: {
        mode: "index",
        intersect: false,
        axis: "x",
    },
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: false,
    },
    scales: {
        y: {
            grid: {
                drawOnChartArea: false,
                drawBorder: false,
            },
        },
        x: {
            grid: {
                drawBorder: false,
                borderDash: [6],
                border: false,
            },
            ticks: {
                font: {
                    family: "'Mulish', sans-serif",
                    size: "16px",
                },
            },
        },
    },
};

const createData = () => {
    return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ].map((month) => {
        const profit = Math.round(Math.random() * 800) + 500;
        const newUsers = ~~(Math.random() * 1000) + 50;

        return {
            month,
            sales: Math.round(profit / 5),
            profit,
            newUsers,
        };
    });
};

const fetchDataFromAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(createData());
        }, 750);
    });
};

const StatisticsChart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        const results = await fetchDataFromAPI();

        setData(results);
        setLoading(false);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const chartData = {
        labels: data.map(({ month }) => month),
        datasets: [
            {
                label: "Sales",
                backgroundColor: "rgba(51,200,99,.1)",
                borderColor: "rgba(51,200,99,.7)",
                fill: true,
                data: data.map(({ sales }) => sales),
                lineTension: 0.2,
            },
            {
                label: "Profit",
                backgroundColor: "rgba(242,153,74,.1)",
                borderColor: "rgba(242,153,74,.7)",
                fill: true,
                data: data.map(({ profit }) => profit),
                lineTension: 0.2,
            },
            {
                label: "New Users",
                backgroundColor: "rgba(166, 74, 242,.1)",
                borderColor: "rgba(166, 74, 242,.7)",
                fill: true,
                data: data.map(({ newUsers }) => newUsers),
                lineTension: 0.3,
            },
        ],
    };

    if (loading) return "Loading...";

    return <Chart type="line" data={chartData} options={options} />;
};

export default StatisticsChart;
