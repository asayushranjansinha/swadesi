"use client";

import { WidgetDataProps } from "@/lib/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import DoughnutChart from "../shared/DoughnutChart";

function Widget({
  title,
  amount,
  percent,
  data,
  options,
  value,
}: WidgetDataProps<"doughnut">) {
  return (
    <div className="w-full rounded-lg p-4 grid grid-cols-2 gap-4 bg-sky-100 dark:bg-secondary/35 mx-auto shadow-md">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
        <div className="flex items-center mb-2">
          {percent > 0 ? (
            <Icon
              icon="uil:arrow-growth"
              width="24"
              height="24"
              color="#16FF00"
            />
          ) : (
            <Icon
              icon="lucide:trending-down"
              width="24"
              height="24"
              color="red"
            />
          )}
          <h3 className="text-base font-semibold ml-2">{`${
            percent > 0 ? "+" + percent : percent
          }%`}</h3>
        </div>
        <h2 className="text-2xl font-semibold">{`${
          amount ? "₹" + value : value
        }`}</h2>
      </div>
      <div className="flex items-center justify-center">
        <DoughnutChart data={data} options={options} />
      </div>
    </div>
  );
}

export default Widget;
