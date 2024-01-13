import { ChartData, ChartOptions } from "chart.js";
import {
  BarChartProps,
  FeaturedProductItem,
  ProductCategory,
  ProductItem,
  ProductSize,
  WidgetDataProps,
} from "./lib/types";
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
    },
    cutout: "65%",
  },
};

const monthlySalesData: ChartData<"bar"> = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Current Year",
      data: [1200, 1500, 1800, 2000, 1600, 2200],
      backgroundColor: "hsla(200, 80%, 50%, 0.6)",
      hoverBackgroundColor: "hsla(200, 80%, 60%, 0.8)",
    },
    {
      label: "Past Year",
      data: [1000, 1300, 1600, 1800, 1400, 2000],
      backgroundColor: "hsla(0, 80%, 50%, 0.6)",
      hoverBackgroundColor: "hsla(0, 80%, 60%, 0.8)",
    },
  ],
};
const monthlySalesOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    colors: {
      enabled: true,
    },
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Sales",
      },
    },
  },
};
export const monthlySalesChartProps: BarChartProps = {
  data: monthlySalesData,
  options: monthlySalesOptions,
};

export const inventoryData = [
  { category: "Electronics", color: "#3498db", percentage: 45 },
  { category: "Clothing", color: "#2ecc71", percentage: 63 },
  { category: "Home", color: "#e74c3c", percentage: 7 },
  { category: "Books", color: "#9b59b6", percentage: 81 },
  { category: "Sports", color: "#e67e22", percentage: 55 },
  { category: "Furniture", color: "#1abc9c", percentage: 34 },
  { category: "Toys", color: "#f39c12", percentage: 12 },
  { category: "Beauty", color: "#d35400", percentage: 19 },
  { category: "Kitchen", color: "#c0392b", percentage: 92 },
  { category: "Stationery", color: "#3498db", percentage: 57 },
];

export const genderRatioDataSet: ChartData<"doughnut"> = {
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["hsla(210, 50%, 60%, 0.6)", "hsla(0, 80%, 60%, 0.6)"],
      hoverBackgroundColor: [
        "hsla(210, 50%, 70%, 0.8)",
        "hsla(0, 80%, 70%, 0.8)",
      ],
      borderColor: ["hsla(210, 50%, 70%, 1)", "hsla(0, 80%, 70%, 1)"],
    },
  ],
};
const genderRatioDataSetOption: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

export const SalesDistributionChartData: ChartData<"polarArea"> = {
  labels: ["Electronics", "Clothing", "Home Goods", "Books", "Toys"],
  datasets: [
    {
      label: "12:00 AM",
      data: [30, 20, 15, 25, 10],
      backgroundColor: [
        "hsla(210, 50%, 60%, 0.4)",
        "hsla(0, 80%, 60%, 0.4)",
        "hsla(120, 50%, 60%, 0.4)",
        "hsla(45, 80%, 60%, 0.4)",
        "hsla(300, 80%, 60%, 0.4)",
      ],
      hoverBackgroundColor: [
        "hsla(210, 50%, 60%, 0.6)",
        "hsla(0, 80%, 60%, 0.6)",
        "hsla(120, 50%, 60%, 0.6)",
        "hsla(45, 80%, 60%, 0.6)",
        "hsla(300, 80%, 60%, 0.6)",
      ],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      borderWidth: 1,
    },
    {
      label: "3:00 AM",
      data: [25, 15, 10, 20, 8],
      backgroundColor: [
        "hsla(210, 50%, 60%, 0.4)",
        "hsla(0, 80%, 60%, 0.4)",
        "hsla(120, 50%, 60%, 0.4)",
        "hsla(45, 80%, 60%, 0.4)",
        "hsla(300, 80%, 60%, 0.4)",
      ],
      hoverBackgroundColor: [
        "hsla(210, 50%, 60%, 0.6)",
        "hsla(0, 80%, 60%, 0.6)",
        "hsla(120, 50%, 60%, 0.6)",
        "hsla(45, 80%, 60%, 0.6)",
        "hsla(300, 80%, 60%, 0.6)",
      ],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      borderWidth: 1,
    },
    {
      label: "6:00 AM",
      data: [40, 30, 25, 35, 15],
      backgroundColor: [
        "hsla(210, 50%, 60%, 0.4)",
        "hsla(0, 80%, 60%, 0.4)",
        "hsla(120, 50%, 60%, 0.4)",
        "hsla(45, 80%, 60%, 0.4)",
        "hsla(300, 80%, 60%, 0.4)",
      ],
      hoverBackgroundColor: [
        "hsla(210, 50%, 60%, 0.6)",
        "hsla(0, 80%, 60%, 0.6)",
        "hsla(120, 50%, 60%, 0.6)",
        "hsla(45, 80%, 60%, 0.6)",
        "hsla(300, 80%, 60%, 0.6)",
      ],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      borderWidth: 1,
    },
    {
      label: "9:00 AM",
      data: [60, 40, 35, 45, 20],
      backgroundColor: [
        "hsla(210, 50%, 60%, 0.4)",
        "hsla(0, 80%, 60%, 0.4)",
        "hsla(120, 50%, 60%, 0.4)",
        "hsla(45, 80%, 60%, 0.4)",
        "hsla(300, 80%, 60%, 0.4)",
      ],
      hoverBackgroundColor: [
        "hsla(210, 50%, 60%, 0.6)",
        "hsla(0, 80%, 60%, 0.6)",
        "hsla(120, 50%, 60%, 0.6)",
        "hsla(45, 80%, 60%, 0.6)",
        "hsla(300, 80%, 60%, 0.6)",
      ],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      borderWidth: 1,
    },
    {
      label: "12:00 PM",
      data: [80, 50, 45, 55, 30],
      backgroundColor: [
        "hsla(210, 50%, 60%, 0.4)",
        "hsla(0, 80%, 60%, 0.4)",
        "hsla(120, 50%, 60%, 0.4)",
        "hsla(45, 80%, 60%, 0.4)",
        "hsla(300, 80%, 60%, 0.4)",
      ],
      hoverBackgroundColor: [
        "hsla(210, 50%, 60%, 0.6)",
        "hsla(0, 80%, 60%, 0.6)",
        "hsla(120, 50%, 60%, 0.6)",
        "hsla(45, 80%, 60%, 0.6)",
        "hsla(300, 80%, 60%, 0.6)",
      ],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      borderWidth: 1,
    },
    {
      label: "3:00 PM",
      data: [70, 45, 40, 50, 25],
      backgroundColor: [
        "hsla(210, 50%, 60%, 0.4)",
        "hsla(0, 80%, 60%, 0.4)",
        "hsla(120, 50%, 60%, 0.4)",
        "hsla(45, 80%, 60%, 0.4)",
        "hsla(300, 80%, 60%, 0.4)",
      ],
      hoverBackgroundColor: [
        "hsla(210, 50%, 60%, 0.6)",
        "hsla(0, 80%, 60%, 0.6)",
        "hsla(120, 50%, 60%, 0.6)",
        "hsla(45, 80%, 60%, 0.6)",
        "hsla(300, 80%, 60%, 0.6)",
      ],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      borderWidth: 1,
    },
  ],
};
export const SalesDistributionChartOptions: ChartOptions<"polarArea"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      type: "radialLinear",
      animate: true,
      startAngle: 0,
      angleLines: {
        display: true,
        color: "rgba(255, 255, 255, 0.3)",
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
      },
    },
  },
  plugins: {},
};

export const dealOfTheDayProduct: ProductItem = {
  name: "Film Camera",
  description:
    "Capture memories with our classic film camera. A perfect blend of nostalgia and artistry.",
  images: [
    "https://images.pexels.com/photos/5001553/pexels-photo-5001553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4889279/pexels-photo-4889279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2335048/pexels-photo-2335048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2925312/pexels-photo-2925312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  price: 99.99,
  sizes: [
    ProductSize.Medium,
    ProductSize.Small,
    ProductSize.Large,
    ProductSize.XLarge,
  ],
  category: ProductCategory.Electronics,
};

export const FeaturedProductList: FeaturedProductItem[] = [
  {
    name: "Smart Home Security Camera",
    description:
      "Enhance home security with our high-definition, wireless camera featuring motion detection and two-way audio.",
    imageUrl:
      "https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentPrice: 2999,
    orgPrice: 3999,
  },
  {
    name: "Organic Matcha Green Tea Set",
    description:
      "Experience the rich flavor of premium-grade matcha with our organic set – perfect for tea enthusiasts.",
    imageUrl:
      "https://images.pexels.com/photos/7565515/pexels-photo-7565515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentPrice: 2499,
    orgPrice: 2999,
  },
  {
    name: "Wireless Bluetooth Earbuds",
    description:
      "Immerse yourself in music with our wireless earbuds, featuring crystal-clear sound and comfortable fit.",
    imageUrl:
      "https://images.pexels.com/photos/6867258/pexels-photo-6867258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    currentPrice: 899,
    orgPrice: 1299,
  },
];


