import { ChartData, ChartOptions } from "chart.js";
import {
  BarChartProps,
  Product,
  ProductCategory,
  QuantityUnit,
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

export const FeaturedEssentials: Product[] = [
  {
    // Basic Information
    id: "1",
    name: "BYB Essentials Organic LemonGrass Essential Oil, 100% Pure | Natural | Undiluted (1000 ml)",
    brand: "BYB Essentials",
    price: 1999,
    images: [
      "https://m.media-amazon.com/images/I/51DB+kbjpcL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/41gXEb1WLyL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/41NR4-POv3L._SX450_.jpg",
      "https://m.media-amazon.com/images/I/71QV8HEdAQL._SX450_.jpg",
    ],

    // Descriptive and Quantity-related Properties
    description: `BYB Lemongrass Oil Organic Lemongrass Oil - BYB Essential organic essential oils are proudly directly procured for farms to ensure ultimate quality and integrity. 100% Pure, Single Ingredient Oil - BYB Essential organic essential oils are a single-ingredient product. No synthetic additives, ever. Multipurpose Essential Oil – BYB Essentials oils are suitable for aromatherapy diffusers and have many other great uses and benefits. 3rd Party Tested for Purity - Each batch is being tested for purity by a 3rd Party Independent Lab. Vegan & Cruelty-Free - Free from additives, BYB Essentials aromatherapy oils are proudly vegan and cruelty-free. Why BYB Essentials oils? How did we get our start? BYB Essentials was formed from the idea: Natural organic products made for you, by you. We believe that natural products are the key to a healthy body, mind, and soul. What makes our products unique? We are committed to maintaining the highest quality by sourcing the best of nature. Our products are Certified Organic, and Cruelty-Free. Each batch is tested for purity by a 3rd Party Lab. Why do we love what we do? We believe in our customers, our community, and our products. Our customers are very important to us and we are always listening.`,
    netQuantity: 1000,
    quantityUnit: QuantityUnit.Milliliters,
    totalStock: 100,

    // Categorization and Additional Features
    category: ProductCategory.Beauty,
    features: ["Pure", "Natural", "Chemical Free"],
    color: "Clear",

    //  // Weight and Dimensions
    //  weight?: ProductUnit;
    //  dimensions?: { length: number; width?: number; height: number };

    //  // Sizes Information
    //  sizes?: ProductSizes[];
  },
  {
    // Basic Information
    id: "2",
    name: "Aravi Organic Rosemary Essential Oil for Hair Growth, Quick Hair Growth Rosemary Oil & Hair Fall Control - 100% Pure, Natural and Undiluted Rosemary Leaves Oil- 30 ml",
    brand: "Exotic Aromas",
    price: 399,
    images: [
      "https://m.media-amazon.com/images/I/41BDhLaXwZL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61BJJFa-D1L._SY450_.jpg",
      "https://m.media-amazon.com/images/I/814GNSe9GeL._SY450_.jpg",
      "https://m.media-amazon.com/images/I/71dcQJe2d0L._SY450_.jpg",
      "https://m.media-amazon.com/images/I/71PlTVGYekL._SY450_.jpg",
    ],

    // Descriptive and Quantity-related Properties
    description: `Rosemary Essential Oil is extracted from the leaves of the Rosemary plant which has a woody, evergreen scent and used commonly for therapeutic purposes. You can also add the oil in a diffuser, bathwater or combine with a carrier oil.
    Owing to its many beneficial, medicinal & therapeutic properties, Rosemary Oil is used in aromatherapy as it can help with cerebral activity and help focus better. It is also used in hair care for stimulating hair growth & managing hair loss.
    Rosemary Essential Oil has many medicinal properties due to which it can be combined with different mixtures to make your own toner. It is the perfect specimen to add in your face cleansing & Hair Care regime.
    Add a drop to your diffuser, mix it with carrier oils for massage, or incorporate it into your skincare routine. Essential Oil is a natural and versatile solution that caters to your well-being and relaxation needs.
    Aravi Organic is committed to creating and providing high-quality beauty products to help people embrace their natural features. Our formulas are carefully crafted by revered scientists after hand-picking natural ingredients for you.`,
    netQuantity: 30,
    quantityUnit: QuantityUnit.Milliliters,
    totalStock: 100,

    // Categorization and Additional Features
    category: ProductCategory.Beauty,
    features: ["Rosemary", "Pure ", "Relaxation"],

    //  // Weight and Dimensions
    //  weight?: ProductUnit;
    //  dimensions?: { length: number; width?: number; height: number };

    //  // Sizes Information
    //  sizes?: ProductSizes[];
  },
  {
    // Basic Information
    id: "3",
    name: "CS Essentials Skin Fuel Moisturizer Daily Moisturizer for Dry Skin,Lighten Skin,Glowing Skin - For Men & Women",
    brand: "CS ESSENTIALS",
    price: 425,
    images: [
      "https://m.media-amazon.com/images/I/61DV7AzA3EL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71QDPF2e8SL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/41yTzWBvqTS._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61jgB9-3XhS._SX522_.jpg",
      "https://m.media-amazon.com/images/I/91A0Y9QRg-S._SX522_.jpg",
    ],

    // Descriptive and Quantity-related Properties
    description: `Neem infused Facial Cleanser is an ideal gentle and natural alternative to harsh Sulphate infused cleansers, and is especially designed to treat sensitive, acne prone and oily skin.`,
    netQuantity: 50,
    quantityUnit: QuantityUnit.Milliliters,
    totalStock: 100,

    // Categorization and Additional Features
    category: ProductCategory.Beauty,
    features: ["Relaxation"],

    //  // Weight and Dimensions
    //  weight?: ProductUnit;
    //  dimensions?: { length: number; width?: number; height: number };

    //  // Sizes Information
    //  sizes?: ProductSizes[];
  },
  {
    // Basic Information
    id: "4",
    name: "Soulflower Rosemary Essential Oil for Hair Growth, Hair Fall Control and Nourishment, Skin Care | Clinically Tested & Ecocert Certified Organic 100% Pure, Natural, Undiluted | 15ml",
    brand: "CS ESSENTIALS",
    price: 424,
    images: [
      "https://m.media-amazon.com/images/I/31X63UouLnL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61Vit3UfvEL._SY450_.jpg",
      "https://m.media-amazon.com/images/I/61NO6bUouvL._SY450_.jpg",
      "https://m.media-amazon.com/images/I/61Re-hv-OCL._SY450_.jpg",
      "https://m.media-amazon.com/images/I/61dksG1rxvL._SY450_.jpg",
    ],

    // Descriptive and Quantity-related Properties
    description: `✅ “22 Saal ka Bharosa” for HAIR GROWTH and VISIBLY THICKER HAIR: Soulflower Rosemary Essential Oil has 360-degree hair benefits. Encourages faster hair growth, Hair Serum controls hair fall, reduces hair damage, receding hairline, and hair thinning
    ✅FULLER SCALP COVERAGE: Stimulates blood circulation to the scalp, hair growth as it may have the ability to unclog the pores and seep deep into the hair follicles and promotes strong hair roots resulting in less breakage
    ✅BLEMISH-FREE, CLEAR SKIN: Helps moisturize skin, reduce blemishes, dark spots, and puffiness, regulate oil production and improve skin complexion
    ✅PREMIUM ORGANIC OIL: Our 100% Pure, Undiluted & Natural Rosemary Essential Oil extracted through Steam-Distillation of High-Quality Rosemary Leaves ensures you get its maximum therapeutic benefits which synthetic oils cannot provide
    ✅VALUE FOR MONEY: Multipurpose & Versatile, Suitable for Men & Women of All Hair & Skin Types, add it to any DIYS for Hair & Skin or use it for Aromatherapy by adding it to a diffuser. Comes in a tightly sealed reusable glass bottle with a glass dropper included for easy application
    ✅ CLINICALLY TESTED AND CERTIFIED: Soulflower Rosemary Essential Oil is India FDA Approved, ECOCERT COSMOS ORGANIC Certified, Clinically Tested, Preservative, & Chemical Free and Guarantee of Customer Satisfaction. PATCH TEST (CLINICALLY TESTED) : Report has been completed by EnvisBE Solutions Pvt. Ltd. on 1st April 2023`,
    netQuantity: 15,
    quantityUnit: QuantityUnit.Milliliters,
    totalStock: 100,

    // Categorization and Additional Features
    category: ProductCategory.Beauty,
    features: ["Soulflower", "Rosemary", "Skin Safe"],

    //  // Weight and Dimensions
    //  weight?: ProductUnit;
    //  dimensions?: { length: number; width?: number; height: number };

    //  // Sizes Information
    //  sizes?: ProductSizes[];
  },
  {
    // Basic Information
    id: "5",
    name: "Organix Mantra Lavender Oil | Promotes Clear Skin, Strong Hair | Calming & Soothing Care for Face, Scalp & Body | 15ML",
    brand: "Organix Mantra",
    price: 230,
    images: [
      "https://m.media-amazon.com/images/I/61HEbcREltL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/716LTCDZ-uL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71-9mplHUHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gtNMy67kL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61dksG1rxvL._SY450_.jpg",
      "https://m.media-amazon.com/images/I/61dksG1rxvL._SY450_.jpg",
      "https://m.media-amazon.com/images/I/71ZEUY1mU2L._SX679_.jpg",
    ],

    // Descriptive and Quantity-related Properties
    description: `Beauty Unveiled : Organix Mantra Lavender Oil is your beauty secret, known for potentially rejuvenating and nourishing your skin and face, helping you achieve a radiant and serene appearance.
    Glowing Complexion : Experience the calming and soothing properties of Lavender Oil when added to your skincare regimen. It may contribute to a smoother, even-toned complexion, allowing your natural beauty to shine through.
    Hair Elegance : Elevate your haircare routine with the nurturing touch of Organix Mantra Lavender Oil. It's known for promoting a healthy scalp and enhancing the natural shine and luster of your locks, leaving your hair brilliantly beautiful.
    Refresh and Revitalize : Rediscover your inner beauty with Lavender Oil. Its rejuvenating qualities may help you maintain a fresh and revitalized appearance, ensuring you always look your best.
    Serene Face : Organix Mantra Lavender Oil is cherished for its soothing effects on the skin. Add it to your daily routine for a serene and even-toned complexion, exuding natural grace.`,
    netQuantity: 15,
    quantityUnit: QuantityUnit.Milliliters,
    totalStock: 100,

    // Categorization and Additional Features
    category: ProductCategory.Beauty,
    features: ["Lavender", "Undiluted", "Aromatherapy"],

    //  // Weight and Dimensions
    //  weight?: ProductUnit;
    //  dimensions?: { length: number; width?: number; height: number };

    //  // Sizes Information
    //  sizes?: ProductSizes[];
  },
  {
    // Basic Information
    id: "6",
    name: "Earth N Pure Sandalwood Essential Oil (Chandan Oil) 100% Pure, Natural & Therapeutic Grade -Bright, Clean, Flawless Skin, Diffusers, Soap Making, Lotion, Home Scents, Linen Spray, Bath Bombs (50 Ml)",
    brand: "Organix Mantra",
    price: 699,
    images: [
      "https://m.media-amazon.com/images/I/412IWIGwGlL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/712D6-ZVLZL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71mx+b91djL._SL1083_.jpg",
      "https://m.media-amazon.com/images/I/71FeYaKl1jL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41PsiuqcG6L._SX679_.jpg",
    ],

    // Descriptive and Quantity-related Properties
    description: `Earth N Pure, A WAY OF LIFE - We started Earth N Pure to share with our friends and family, and now with you, the joy and bliss of living a natural life. We want to help you understand that once you put your trust in nature, it can protect you, heal you and make you the best version of yourself.
    IMPROVE HEALTH, WELLBEING AND LIFESTYLE- Our sandalwood Oil helps to calm nourish and sustain body and mind as it is filled up with nature’s goodness. It gets easily absorbed in the skin and can give that absorbing radiance and shine. Sandalwood Oil also easily gets immersed by the hair for a smoother and glossier look. It is a great ingredient for hand lotion, beauty products, hair products and other skincare products.
    BODYCARE WITH SANDALWOOD OIL- Made with pure and undiluted Santalum album, DIY is just the next step. Make your own beauty and well-being products with Sandalwood Oil and other high quality ingredients from Earth N Pure. Discover recipes to create handmade soap, moisturizer, Sandalwood Oil face wash, and other loveliness products.
    CLEANER AND HIGH-QUALITY AFFORDABLE OILS: At Earth N Pure our goal is to positively impact the lives of as many people as we possibly can, by selling such a high quality product at an affordable price. Be sure while purchasing Earth N Pure Sandalwood Oil as it is physically refined thus made more stable for extended shelf life.
    CURING WITH ENVIRONMENT – Earth N Pure entire product range is made of handpicked raw materials. This is perfect for DIY cosmetic products, as it is Hexane free, Para-bens free, with no synthetic fragrances and artificial compounds that destruction the environment. Help heal nature as well as your body with Earth N Pure.
    FDA APPROVED`,
    netQuantity: 50,
    quantityUnit: QuantityUnit.Milliliters,
    totalStock: 100,

    // Categorization and Additional Features
    category: ProductCategory.Beauty,
    features: ["Lavender", "Undiluted", "Aromatherapy"],

    //  // Weight and Dimensions
    //  weight?: ProductUnit;
    //  dimensions?: { length: number; width?: number; height: number };

    //  // Sizes Information
    //  sizes?: ProductSizes[];
  },
];
