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
    type: 'link' | 'button'
    title: string;
    path?: string;
    element?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavigation[];
}