import React from 'react'
import LineChartComp from './LineChartComp';
import PieChartComp from './PieChartComp';
import StackedBarChart from './StackBarChart';

function DashboardSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-2 md:p-6">
      <LineChartComp
        line1_key={"Total_Households_Worked"}
        line2_key={"Total_Individuals_Worked"}
        title={"Employment trend"}
        legend1={"Total Households Worked"}
        legend2={"Total Individuals Worked"}
      />
      <PieChartComp
        title="Work Category Distribution"
        dataKeys={[
          "percent_of_Expenditure_on_Agriculture_Allied_Works",
          "percent_of_NRM_Expenditure",
        ]}
      />
      <LineChartComp
        line1_key={"Average_Wage_rate_per_day_per_person"}
        line2_key={"Wages"}
        title={"Wage trend"}
        legend1={"Average Wage/Day/Person"}
        legend2={"Wages"}
      />
      <StackedBarChart
        bar1_key={"Women_Persondays"}
        bar2_key={"Total_Households_Worked"}
        title={"Women Participation"}
        legend1={"Women Persondays"}
        legend2={"Total Households Worked"}
      />
      <LineChartComp
        line1_key={"Approved_Labour_Budget"}
        line2_key={"Total_Exp"}
        title={"Budget vs Expenditure"}
        legend1={"Approved Labour Budget"}
        legend2={"Total Exp"}
      />
      <PieChartComp
        title="Caste Persondays"
        dataKeys={["SC_persondays", "ST_persondays"]}
      />
      <StackedBarChart
        bar1_key={"ST_persondays"}
        bar2_key={"SC_persondays"}
        title={"Caste Representation"}
        legend1={"ST persondays"}
        legend2={"SC persondays"}
      />
      <LineChartComp
        line1_key={"percentage_payments_gererated_within_15_days"}
        title={"Payment efficiency"}
        legend1={"% Payments in 15 Days"}
      />
    </div>
  );
}

export default DashboardSection
