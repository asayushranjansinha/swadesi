"use client";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartDataset,
  ChartOptions,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { PolarChartProps } from "@/lib/types";
import { useTheme } from "next-themes";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarChart({ data, options }: PolarChartProps) {
  const { theme } = useTheme();

  const { datasets, ...restData } = data;
  const updatedDatasets = datasets?.map(
    (dataset: ChartDataset<"polarArea">) => ({
      ...dataset,
      borderWidth: 0,
      hoverBorderWidth: 1,
    })
  );
  const chartData: ChartData<"polarArea"> = {
    ...restData,
    datasets: updatedDatasets,
  };

  const { scales, plugins, ...otherOptions } = options!;
  const chartOptions: ChartOptions<"polarArea"> = {
    ...otherOptions,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      ...plugins,
      legend: {
        ...plugins?.legend,
        labels: {
          ...plugins?.legend?.labels,
          color: theme === "light" ? "#000" : "#FFF",
        },
      },
    },
    scales: {
      ...scales,
      r: {
        type: "radialLinear",
        animate: true,
        startAngle: 0,
        angleLines: {
          display: true,
          color:
            theme === "light"
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0,
        },
        ticks: {
          color: theme === "light" ? "#000" : "#FFF",
          backdropColor:
            theme === "dark"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          z: 1,
          backdropPadding: 4,
        },
        grid: {
          color:
            theme === "light"
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
        },
      },
    },
  };

  return <PolarArea data={chartData} options={chartOptions} />;
}

export default PolarChart;
