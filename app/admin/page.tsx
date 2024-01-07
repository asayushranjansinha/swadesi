"use client";

import Widget from "@/components/admin/Widget";
import {
  revenueWidgetData,
  salesWidgetData,
  userSignupWidgetData,
} from "@/data";
function page() {
  return (
    <section className="w-full h-full">
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
    </section>
  );
}

export default page;
