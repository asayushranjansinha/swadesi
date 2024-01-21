import { ChartData, ChartOptions } from "chart.js";

export enum ProductCategory {
    Electronics = "Electronics",
    HomeAndKitchen = "Home & Kitchen",
    Clothing = "Clothing",
    Beauty = "Beauty",
}
export enum QuantityUnit {
    Grams = "g",
    Kilograms = "kg",
    Milliliters = "mL",
    Liters = "L",
    Pieces = "pcs",
}

export interface ProductSizes {
    size: string;
    availableQuantity: number;
}

export interface Product {
    // Basic Information
    id: string;
    name: string;
    brand: string;
    price: number;
    images: string[];

    // Descriptive and Quantity-related Properties
    description?: string;
    netQuantity?: number;
    quantityUnit?: QuantityUnit;
    totalStock: number;

    // Categorization and Additional Features
    category?: ProductCategory;
    features?: string[];
    color?: string;

    // Weight and Dimensions
    weight?: QuantityUnit;
    dimensions?: { length: number; width?: number; height: number };

    // Sizes Information
    sizes?: ProductSizes[];
}

/* ************** COMPONENT INTERFACES ************* */
export interface Navigation {
    id: string;
    heading: string;
    type: 'link' | 'menu',
    path?: string;
    icon?: string;
    access?: 'admin';
    submenu?: boolean;
    submenuItems?: Navigation[];
}

/* *************** ADMIN INTERFACES *********** */
export interface DoughnutChartProps {
    data: ChartData<'doughnut'>;
    options?: ChartOptions<"doughnut">;
}
export interface PolarChartProps {
    data: ChartData<'polarArea'>;
    options?: ChartOptions<"polarArea">;
}
export interface BarChartProps {
    data: ChartData<'bar'>;
    options: ChartOptions<'bar'>;
}
export interface WidgetDataProps<T extends 'bar' | 'doughnut' | 'line' | 'pie'> {
    title: string;
    value: string;
    amount?: boolean;
    percent: number;
    chartType: T;
    data: ChartData<T>;
    options: ChartOptions<T>;
}