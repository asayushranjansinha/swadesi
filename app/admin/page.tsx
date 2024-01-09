"use client";

import Widget from "@/components/admin/Widget";
import BarChart from "@/components/shared/BarChart";
import { Progress } from "@/components/ui/progress";

import {
  inventoryData,
  monthlySalesChartProps,
  revenueWidgetData,
  salesWidgetData,
  userSignupWidgetData,
} from "@/data";

function page() {
  return (
    <section className="w-full h-full">
      {/* Widgets */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
        <Widget
          amount
          value={revenueWidgetData.value}
          title={revenueWidgetData.title}
          percent={revenueWidgetData.percent}
          data={revenueWidgetData.data}
          options={revenueWidgetData.options}
          chartType="doughnut"
        />
        <Widget
          amount
          value={salesWidgetData.value}
          title={salesWidgetData.title}
          percent={salesWidgetData.percent}
          data={salesWidgetData.data}
          options={salesWidgetData.options}
          chartType="doughnut"
        />
        <Widget
          value={userSignupWidgetData.value}
          title={userSignupWidgetData.title}
          percent={userSignupWidgetData.percent}
          data={userSignupWidgetData.data}
          options={userSignupWidgetData.options}
          chartType="doughnut"
        />
      </div>

      {/* Charts & Inventory */}
      <div className="w-full h-[400px] grid xl:gap-x-4 gap-y-4 grid-cols-1 xl:grid-cols-3 mt-12">
        <div className="col-span-2 flex flex-col h-full bg-sky-100 dark:bg-secondary/35 p-2 rounded-lg">
          <h2 className="text-3xl font-semibold text-center">Sales Report</h2>
          <div className="h-[300px]">
            <BarChart
              data={monthlySalesChartProps.data}
              options={monthlySalesChartProps.options}
            />
          </div>
        </div>
        <div className="col-span-1 h-full flex flex-col bg-sky-100 dark:bg-secondary/35 p-2 rounded-lg">
          <h2 className="text-3xl font-semibold text-center">Inventory</h2>
          <div className="w-full flex-grow flex flex-col gap-2 justify-between">
            {inventoryData.map((item, idx) => (
              <div
                key={idx}
                className="w-full grid grid-cols-5 space-x-2 items-center"
              >
                <span className="text-md truncate">{item.category}</span>
                <Progress
                  value={item.percentage}
                  color={item.color}
                  className="col-span-3 h-3"
                />
                <span
                  className="text-right"
                  style={{ color: item.percentage < 15 ? "red" : "inherit" }}
                >{`${item.percentage}%`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
