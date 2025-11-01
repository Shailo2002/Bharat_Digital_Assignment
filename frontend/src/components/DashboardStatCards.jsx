import React from "react";
import { useSelector } from "react-redux";

export default function DashboardStatCards() {
  const { districtData } = useSelector((state) => state.user);
  if (!districtData || districtData.length === 0) return null;

  
  const latest = districtData[districtData.length - 1];
  const previous = districtData[districtData.length - 2] || latest;


  const calcChange = (curr, prev) => {
    if (!prev || prev === 0) return 0;
    return (((curr - prev) / prev) * 100).toFixed(1);
  };

  const cards = [
    {
      label: "Average Wage Rate",
      value: latest?.Average_Wage_rate_per_day_per_person?.toFixed(1),
      change: calcChange(
        latest?.Average_Wage_rate_per_day_per_person,
        previous?.Average_Wage_rate_per_day_per_person
      ),
    },
    {
      label: "Total Works",
      value: latest?.Total_No_of_Works_Takenup?.toLocaleString(),
      change: calcChange(
        latest?.Total_No_of_Works_Takenup,
        previous?.Total_No_of_Works_Takenup
      ),
    },
    {
      label: "Average Employment",
      value: latest?.Average_days_of_employment_provided_per_Household,
      change: calcChange(
        latest?.Average_days_of_employment_provided_per_Household,
        previous?.Average_days_of_employment_provided_per_Household
      ),
    },
    {
      label: "Payment Efficiency",
      value: `${latest?.percentage_payments_gererated_within_15_days?.toFixed(
        1
      )} %`,
      change: calcChange(
        latest?.percentage_payments_gererated_within_15_days,
        previous?.percentage_payments_gererated_within_15_days
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4  gap-4 mt-4 w-full  p-2 md:p-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-center"
        >
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              {card.value}
            </h2>
            <span
              className={`text-sm font-medium ${
                card.change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {card.change >= 0 ? `+${card.change}%` : `${card.change}%`}
            </span>
          </div>
          <p className="text-gray-500 text-sm">{card.label}</p>
        </div>
      ))}
    </div>
  );
}
