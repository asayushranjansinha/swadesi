"use client";

// Components
import BarChart from "@/components/shared/BarChart";
import { Progress } from "@/components/ui/progress";

// Data
import {
    inventoryData,
    monthlySalesChartProps
} from "@/data";

function SalesAndInventory() {
  return (
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
  )
}

export default SalesAndInventory