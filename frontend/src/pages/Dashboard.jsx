import React from "react";
import {
  BiHomeAlt,
  BiUser,
  BiMessageSquareDetail,
  BiStar,
  BiCog,
  BiLogOut,
  BiSearch,
  BiUpArrowAlt,
  BiDownArrowAlt,
} from "react-icons/bi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// --- YOUR DATA ---
// I've embedded your provided data directly here
const mgnregsData = [
  {
    _id: "68fb565927e001f388dd8d3d",
    fin_year: "2020-2021",
    month: "July",
    Total_Exp: 3807.614377487,
    Total_Households_Worked: 74661,
    Total_Individuals_Worked: 92823,
    Number_of_Completed_Works: 1931,
    Number_of_Ongoing_Works: 4934,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 105,
    Wages: 2597.91162,
    Material_and_skilled_Wages: 1172.458207487,
    Women_Persondays: 349385,
    SC_persondays: 428270,
    ST_persondays: 518,
    percentage_payments_gererated_within_15_days: 100.7,
    createdAt: "2025-10-24T10:35:05.620Z",
  },
  {
    _id: "68fb565927e001f388dd8d76",
    fin_year: "2020-2021",
    month: "Aug",
    Total_Exp: 4778.955255687,
    Total_Households_Worked: 79117,
    Total_Individuals_Worked: 99626,
    Number_of_Completed_Works: 2315,
    Number_of_Ongoing_Works: 5140,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 248,
    Wages: 3482.430883,
    Material_and_skilled_Wages: 1205.261902687,
    Women_Persondays: 429605,
    SC_persondays: 522503,
    ST_persondays: 791,
    percentage_payments_gererated_within_15_days: 100.79,
    createdAt: "2025-10-24T10:35:05.625Z",
  },
  {
    _id: "68fb565927e001f388dd8fb9",
    fin_year: "2020-2021",
    month: "Sep",
    Total_Exp: 5478.222802687,
    Total_Households_Worked: 82022,
    Total_Individuals_Worked: 103695,
    Number_of_Completed_Works: 2598,
    Number_of_Ongoing_Works: 5451,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 456,
    Wages: 4179.83403,
    Material_and_skilled_Wages: 1205.261902687,
    Women_Persondays: 488571,
    SC_persondays: 599339,
    ST_persondays: 985,
    percentage_payments_gererated_within_15_days: 100.79,
    createdAt: "2025-10-24T10:35:05.666Z",
  },
  {
    _id: "68fb565927e001f388dd8fe1",
    fin_year: "2021-2022",
    month: "Sep",
    Total_Exp: 4285.32455073,
    Total_Households_Worked: 76848,
    Total_Individuals_Worked: 93159,
    Number_of_Completed_Works: 3640,
    Number_of_Ongoing_Works: 10336,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 716,
    Wages: 3441.1762586,
    Material_and_skilled_Wages: 655.38871213,
    Women_Persondays: 411017,
    SC_persondays: 472892,
    ST_persondays: 557,
    percentage_payments_gererated_within_15_days: 100.09,
    createdAt: "2025-10-24T10:35:05.669Z",
  },
  {
    _id: "68fb565927e001f388dd8df9",
    fin_year: "2023-2024",
    month: "June",
    Total_Exp: 3065.54921,
    Total_Households_Worked: 56292,
    Total_Individuals_Worked: 65710,
    Number_of_Completed_Works: 1764,
    Number_of_Ongoing_Works: 16088,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 165,
    Wages: 2948.97204,
    Material_and_skilled_Wages: 103.13378,
    Women_Persondays: 418520,
    SC_persondays: 389524,
    ST_persondays: 817,
    percentage_payments_gererated_within_15_days: 99.7,
    createdAt: "2025-10-24T10:35:05.639Z",
  },
  {
    _id: "68fb565927e001f388dd8fed",
    fin_year: "2023-2024",
    month: "April",
    Total_Exp: 287.06525,
    Total_Households_Worked: 22498,
    Total_Individuals_Worked: 25294,
    Number_of_Completed_Works: 1091,
    Number_of_Ongoing_Works: 14921,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 0,
    Wages: 287.06525,
    Material_and_skilled_Wages: 0,
    Women_Persondays: 92640,
    SC_persondays: 80154,
    ST_persondays: 85,
    percentage_payments_gererated_within_15_days: 99.68,
    createdAt: "2025-10-24T10:35:05.670Z",
  },
  {
    _id: "68fb565927e001f388dd8eb6",
    fin_year: "2024-2025",
    month: "Oct",
    Total_Exp: 7267.45535471001,
    Total_Households_Worked: 62881,
    Total_Individuals_Worked: 73721,
    Number_of_Completed_Works: 9701,
    Number_of_Ongoing_Works: 14149,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 874,
    Wages: 4820.1881016,
    Material_and_skilled_Wages: 2220.54058311001,
    Women_Persondays: 547334,
    SC_persondays: 505253,
    ST_persondays: 1358,
    percentage_payments_gererated_within_15_days: 99.94,
    createdAt: "2025-10-24T10:35:05.652Z",
  },
  {
    _id: "68fb565927e001f388dd8f44",
    fin_year: "2024-2025",
    month: "Aug",
    Total_Exp: 4359.004831526,
    Total_Households_Worked: 56229,
    Total_Individuals_Worked: 65362,
    Number_of_Completed_Works: 8479,
    Number_of_Ongoing_Works: 13194,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 138,
    Wages: 3551.5011916,
    Material_and_skilled_Wages: 601.467229926,
    Women_Persondays: 395277,
    SC_persondays: 367766,
    ST_persondays: 1109,
    percentage_payments_gererated_within_15_days: 99.81,
    createdAt: "2025-10-24T10:35:05.659Z",
  },
  {
    _id: "68fb565927e001f388dd8f4f",
    fin_year: "2024-2025",
    month: "Sep",
    Total_Exp: 6060.24175266001,
    Total_Households_Worked: 59137,
    Total_Individuals_Worked: 68935,
    Number_of_Completed_Works: 8767,
    Number_of_Ongoing_Works: 13561,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 254,
    Wages: 4034.7783516,
    Material_and_skilled_Wages: 1819.42699106001,
    Women_Persondays: 451316,
    SC_persondays: 421283,
    ST_persondays: 1172,
    percentage_payments_gererated_within_15_days: 99.85,
    createdAt: "2025-10-24T10:35:05.659Z",
  },
  {
    _id: "68fb565927e001f388dd9008",
    fin_year: "2024-2025",
    month: "Dec",
    Total_Exp: 9855.20960483401,
    Total_Households_Worked: 67134,
    Total_Individuals_Worked: 79291,
    Number_of_Completed_Works: 12741,
    Number_of_Ongoing_Works: 14348,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 2316,
    Wages: 6077.5512816,
    Material_and_skilled_Wages: 3550.93165323401,
    Women_Persondays: 685901,
    SC_persondays: 642831,
    ST_persondays: 1588,
    percentage_payments_gererated_within_15_days: 99.94,
    createdAt: "2025-10-24T10:35:05.673Z",
  },
  {
    _id: "68fb565927e001f388dd90d9",
    fin_year: "2024-2025",
    month: "Dec",
    Total_Exp: 9776.12777483401,
    Total_Households_Worked: 66897,
    Total_Individuals_Worked: 78976,
    Number_of_Completed_Works: 11207,
    Number_of_Ongoing_Works: 14503,
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: 2151,
    Wages: 6004.0726516,
    Material_and_skilled_Wages: 3545.32845323401,
    Women_Persondays: 677050,
    SC_persondays: 635421,
    ST_persondays: 1587,
    percentage_payments_gererated_within_15_days: 99.93,
    createdAt: "2025-10-24T10:35:05.685Z",
  },
];
// --- END OF DATA ---

// --- Helper Functions to Process Data ---

// 1. Sort data by date and add a 'name' field for charts
const getChartData = () => {
  return mgnregsData
    .map((item) => ({
      ...item,
      // Create a short name like 'Jul-20' for the X-axis
      name: `${item.month.substring(0, 3)}-${item.fin_year.slice(2, 4)}`,
    }))
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
};

// 2. Get the most recent data point for KPI cards
const getLatestData = (data) => {
  return data[data.length - 1];
};

// --- Reusable Chart Components ---

// KPI Card (Top Left)
const KpiCard = ({ title, value, change, isUp }) => (
  <div className="card kpi-card">
    <div className="kpi-label">{title}</div>
    <div className={`kpi-value ${isUp ? "up" : "down"}`}>
      {isUp ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
      {value.toLocaleString("en-IN")}
    </div>
    <div className="kpi-label">{change} vs last month</div>
  </div>
);

// Payment Efficiency Donut (Top Middle)
const PaymentDonut = ({ percentage }) => {
  const data = [
    { name: "Paid", value: percentage },
    { name: "Pending", value: 100 - percentage },
  ];
  const COLORS = ["#4a4de6", "#f0f0f0"]; // Blue and light gray

  return (
    <div className="card card-payment-pct">
      <div style={{ width: "100%", height: "100px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={50}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="kpi-value"
              style={{ fontSize: "24px", fill: "#4a4de6" }}
            >
              {`${percentage}%`}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div
        className="card-title"
        style={{ marginTop: "10px", marginBottom: 0 }}
      >
        Payments Generated
      </div>
      <div className="kpi-label">within 15 days</div>
    </div>
  );
};

// Work Status Area Charts (Top Right)
const WorkStatusCharts = ({ data }) => (
  <div className="card card-work-status">
    <div className="card-title">Work Status Overview</div>
    <div style={{ width: "100%", height: "150px" }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4a4de6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4a4de6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Number_of_Completed_Works"
            name="Completed"
            stroke="#4a4de6"
            fill="url(#colorCompleted)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div style={{ width: "100%", height: "150px", marginTop: "10px" }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorOngoing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7b00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff7b00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Number_of_Ongoing_Works"
            name="Ongoing"
            stroke="#ff7b00"
            fill="url(#colorOngoing)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Expenditure Trend Line Chart (Middle Left)
const ExpenditureChart = ({ data }) => (
  <div className="card card-expenditure-trend">
    <div className="card-title">Expenditure Trend (in Lakhs)</div>
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Total_Exp"
          name="Total Expenditure"
          stroke="#4a4de6"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Wages"
          name="Wages Paid"
          stroke="#ff7b00"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// Wage vs Material Donut (Middle Center)
const WageSplitDonut = ({ wages, material }) => {
  const total = wages + material;
  const data = [
    { name: "Wages", value: wages },
    { name: "Material & Skilled", value: material },
  ];
  const COLORS = ["#ff7b00", "#4a4de6"]; // Orange and Blue
  const wagePct = ((wages / total) * 100).toFixed(0);
  const materialPct = ((material / total) * 100).toFixed(0);

  return (
    <div className="card card-wage-split">
      <div className="card-title">Expenditure Split</div>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ textAlign: "center", marginTop: "-10px" }}>
        <span style={{ color: "#ff7b00", fontWeight: 600 }}>{wagePct}%</span>{" "}
        Wages
        {" / "}
        <span style={{ color: "#4a4de6", fontWeight: 600 }}>
          {materialPct}%
        </span>{" "}
        Material
      </div>
    </div>
  );
};

// 100 Days Employment Bar Chart (Bottom Left)
const HundredDaysChart = ({ data }) => (
  <div className="card card-100-days-trend">
    <div className="card-title">Households Completed 100 Days Employment</div>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip />
        <Bar
          dataKey="Total_No_of_HHs_completed_100_Days_of_Wage_Employment"
          name="Households"
          fill="#20c997"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// Demographic Persondays (Bottom Right)
const DemographicChart = ({ data }) => {
  const chartData = [
    { name: "Women", Persondays: data.Women_Persondays },
    { name: "SC", Persondays: data.SC_persondays },
    { name: "ST", Persondays: data.ST_persondays },
  ];
  const COLORS = ["#4a4de6", "#ff7b00", "#20c997"];

  return (
    <div className="card card-demographics">
      <div className="card-title">Persondays by Demographic (Latest)</div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" fontSize={12} />
          <YAxis type="category" dataKey="name" fontSize={12} />
          <Tooltip />
          <Bar dataKey="Persondays" name="Persondays">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// --- Main App Component ---

export default function Dashboard() {
  // Process the data
  const chartData = getChartData();
  const latestData = getLatestData(chartData);

  // Get previous month's data for comparison
  const prevData = chartData[chartData.length - 2] || {};

  // Calculate changes for KPI cards
  const householdChange =
    latestData.Total_Households_Worked - prevData.Total_Households_Worked;
  const individualChange =
    latestData.Total_Individuals_Worked - prevData.Total_Individuals_Worked;

  return (
    <div className="app-container">
      {/* --- Sidebar --- */}
      <nav className="sidebar">
        <div className="sidebar-nav">
          <div className="nav-icon active">
            <BiHomeAlt />
          </div>
          <div className="nav-icon">
            <BiUser />
          </div>
          <div className="nav-icon">
            <BiMessageSquareDetail />
          </div>
          <div className="nav-icon">
            <BiStar />
          </div>
          <div className="nav-icon">
            <BiCog />
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="nav-icon">
            <BiLogOut />
          </div>
        </div>
      </nav>

      {/* --- Main Dashboard --- */}
      <main className="dashboard-container">
        {/* Header */}
        <header className="dashboard-header">
          <h1>
            District Growth:{" "}
            <span style={{ color: "#4a4de6" }}>{latestData.district_name}</span>
          </h1>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <BiSearch className="search-icon" />
            </div>
          </div>
        </header>

        {/* --- Dashboard Grid --- */}
        <div className="dashboard-grid">
          {/* KPI: Households Worked */}
          <KpiCard
            title="Total Households Worked"
            value={latestData.Total_Households_Worked}
            change={householdChange.toLocaleString("en-IN")}
            isUp={householdChange > 0}
          />

          {/* KPI: Individuals Worked */}
          <KpiCard
            title="Total Individuals Worked"
            value={latestData.Total_Individuals_Worked}
            change={individualChange.toLocaleString("en-IN")}
            isUp={individualChange > 0}
          />

          {/* Donut: Payment % */}
          <PaymentDonut
            percentage={latestData.percentage_payments_gererated_within_15_days}
          />

          {/* Area Charts: Work Status */}
          <WorkStatusCharts data={chartData} />

          {/* Line Chart: Expenditure Trend */}
          <ExpenditureChart data={chartData} />

          {/* Donut: Wage vs Material */}
          <WageSplitDonut
            wages={latestData.Wages}
            material={latestData.Material_and_skilled_Wages}
          />

          {/* Bar Chart: 100 Days Completed */}
          <HundredDaysChart data={chartData} />

          {/* Bar Chart: Demographics */}
          <DemographicChart data={latestData} />
        </div>
      </main>
    </div>
  );
}
