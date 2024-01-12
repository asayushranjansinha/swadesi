import { ChartData, ChartOptions } from "chart.js";

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

export type SideNavigation = {
    type?: 'link' | undefined;
    title: string;
    path?: string;
    element?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavigation[];
    userRole?: 'admin';
};

export interface FeaturedProductItem {
    name: string;
    description: string;
    imageUrl: string;
    currentPrice: number;
    orgPrice: number
}

export enum ProductCategory {
    Electronics = "Electronics",
    HomeAndKitchen = "Home & Kitchen",
    Clothing = "Clothing",
    Beauty = "Beauty",
}
export enum ProductSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    XLarge = "X-Large",
    XXLarge = "XX-Large",
    XXXLarge = "XXX-Large",
  }

export interface ProductItem {
    name: string;
    description: string;
    images: string[];
    price: number;
    sizes?: ProductSize[]
    category?: ProductCategory;
}