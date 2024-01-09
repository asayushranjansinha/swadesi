"use client";
import DoughnutChart from "@/components/shared/DoughnutChart";
import PolarChart from "@/components/shared/PolarChart";
import { SalesDistributionChartData, SalesDistributionChartOptions, genderRatioDataSet } from "@/data";

function AnalyticsPage() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GenderRatioChart />
      <SalesDistributionChart />
      <div className="bg-gray-200 p-4">Column 2SalesDistributionChart</div>
      <div className="bg-gray-200 p-4">Column 3</div>
      <div className="bg-gray-200 p-4">Column 4</div>
    </div>
  );
}

export default AnalyticsPage;

function GenderRatioChart() {
  return (
    <div className="bg-sky-50 rounded-md dark:bg-secondary/35 p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Customer Gender Ratio
      </h2>
      <div className="h-[20rem] w-full">
        <DoughnutChart data={genderRatioDataSet} />
      </div>
    </div>
  );
}

function SalesDistributionChart() {
  return (
    <div className="bg-sky-50 rounded-md dark:bg-secondary/35 p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Sales Distribution</h2>
      <div className="h-[20rem] w-full">
        <PolarChart data={SalesDistributionChartData} options={SalesDistributionChartOptions} />
      </div>
    </div>
  );
}
