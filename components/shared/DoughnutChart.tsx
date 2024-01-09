"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
  ChartData,
  ChartOptions,
  ChartDataset,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { DoughnutChartProps } from "@/lib/types";

import { useTheme } from "next-themes";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

function DoughnutChart({ data, options }: DoughnutChartProps) {
  const { theme } = useTheme();

  const chartData: ChartData<"doughnut"> = {
    ...data,
    datasets: data.datasets?.map((dataset: ChartDataset<"doughnut">) => ({
      ...dataset,
      borderWidth: 0,
      hoverBorderWidth: 1,
    })),
  };

  const ChartOptions: ChartOptions<"doughnut"> = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      ...options?.plugins,
      legend: {
        ...options?.plugins?.legend,
        labels: {
          ...options?.plugins?.legend?.labels,
          color: theme === "light" ? "#000" : "#FFF",
        },
      },
    },
  };

  return <Doughnut data={chartData} options={ChartOptions} />;
}

export default DoughnutChart;
