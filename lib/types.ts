import { ChartData, ChartOptions } from "chart.js";

export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};

export interface DoughnutChartProps {
    data: ChartData<'doughnut'>;
    options: ChartOptions<"doughnut">;
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
