import { WidgetDataProps } from "./lib/types";
import { changeInPercentage } from "./lib/utils";

export const revenueWidgetData: WidgetDataProps<"doughnut"> = {
  title: "Revenue",
  value: "7000",
  amount: true,
  percent: changeInPercentage(5000, 2000),
  chartType: "doughnut",
  data: {
    labels: ["Current Year", "Previous Year"],
    datasets: [
      {
        data: [5000, 2000],
        backgroundColor: [
          "hsla(342, 100%, 50%, 0.4)",
          "hsla(120, 80%, 50%, 0.4)",
        ],
        hoverBackgroundColor: [
          "hsla(342, 100%, 50%, 0.6)",
          "hsla(120, 80%, 60%, 0.6)",
        ],
        hoverBorderColor: ["hsla(342, 100%, 50%, 1)", "hsla(120, 80%, 60%, 1)"],
      },
    ],
  },
  options: {
    plugins: {
      colors: {
        enabled: true,
      },
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sample Doughnut Chart",
      },
    },
    cutout: "65%",
  },
};

export const salesWidgetData: WidgetDataProps<"doughnut"> = {
  title: "Sales",
  value: "12000",
  amount: true,
  percent: changeInPercentage(8000, 4000),
  chartType: "doughnut",
  data: {
    labels: ["Current Month", "Previous Month"],
    datasets: [
      {
        data: [8000, 4000],
        backgroundColor: [
          "hsla(210, 90%, 50%, 0.4)",
          "hsla(60, 80%, 50%, 0.4)",
        ],
        hoverBackgroundColor: [
          "hsla(210, 90%, 50%, 0.6)",
          "hsla(60, 80%, 60%, 0.6)",
        ],
        hoverBorderColor: ["hsla(210, 90%, 50%, 1)", "hsla(60, 80%, 60%, 1)"],
      },
    ],
  },
  options: {
    plugins: {
      colors: {
        enabled: true,
      },
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sample Doughnut Chart for Sales",
      },
    },
    cutout: "65%",
  },
};

export const userSignupWidgetData: WidgetDataProps<"doughnut"> = {
  title: "User Signup Comparison",
  value: "800",
  amount: true,
  percent: changeInPercentage(300, 500),
  chartType: "doughnut",
  data: {
    labels: ["Current Month", "Previous Month"],
    datasets: [
      {
        data: [300, 500],
        backgroundColor: [
          "hsla(120, 80%, 50%, 0.6)",
          "hsla(240, 80%, 50%, 0.6)",
        ],
        hoverBackgroundColor: [
          "hsla(120, 80%, 60%, 0.8)",
          "hsla(240, 80%, 60%, 0.8)",
        ],
        hoverBorderColor: ["hsla(120, 80%, 60%, 1)", "hsla(240, 80%, 60%, 1)"],
      },
    ],
  },
  options: {
    plugins: {
      colors: {
        enabled: true,
      },
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "User Signup Comparison - Previous Month vs Current Month",
      },
    },
    cutout: "65%",
  },
};
