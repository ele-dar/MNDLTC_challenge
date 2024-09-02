"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import React, { useContext } from "react";
import { FeedbackData } from "@/types";

import { DataContext } from "../app/page";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const ScoreChart: React.FC = () => {
  const context = useContext(DataContext);

  const chartLabels = context?.data.map((el: any) => el.name);
  const chartValues = context?.data.map((el: any) => el.score);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Score",
        data: chartValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ScoreChart;
