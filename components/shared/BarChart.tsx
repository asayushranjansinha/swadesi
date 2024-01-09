"use client";
import {
  BarController,
  CategoryScale,
  ChartData,
  ChartDataset,
  Chart as ChartJS,
  ChartOptions,
  Colors,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import { BarChartProps } from "@/lib/types";

import { useTheme } from "next-themes";

ChartJS.register(
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Colors
);

function BarChart({ data, options }: BarChartProps) {
  const { theme } = useTheme();

  const { datasets, ...restData } = data;

  const updatedDatasets = datasets?.map((dataset: ChartDataset<"bar">) => ({
    ...dataset,
    borderWidth: 0,
    hoverBorderWidth: 1,
  }));

  const chartData: ChartData<"bar"> = {
    ...restData,
    datasets: updatedDatasets,
  };

  const {
    scales: originalScales,
    plugins: originalPlugins,
    ...restOptions
  } = options;

  const chartOptions: ChartOptions<"bar"> = {
    ...restOptions,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      ...originalPlugins,
      legend: {
        ...originalPlugins?.legend,
        labels: {
          ...originalPlugins?.legend?.labels,
          color: theme === "light" ? "#000" : "#FFF",
        },
      },
    },
    scales: {
      ...originalScales,
      x: {
        ...originalScales?.x,
        title: {
          ...originalScales?.x?.title,
          color: theme === "light" ? "#000" : "#FFF",
        },
        ticks: { color: theme === "light" ? "#000" : "#FFF" },
      },
      y: {
        ...originalScales?.y,
        title: {
          ...originalScales?.y?.title,
          color: theme === "light" ? "#000" : "#FFF",
        },
        grid: {
          color:
            theme === "light"
              ? "rgba(0, 0, 0, 0.1)"
              : "rgba(255, 255, 255, 0.1)",
        },
        ticks: { color: theme === "light" ? "#000" : "#FFF" },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}

export default BarChart;
