import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

export default function LineChartComp({ line1_key, line2_key, title, bottom }) {
  const { districtData } = useSelector((state) => state.user);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={districtData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />

          {bottom ? (
            <Legend
              layout="vertical"
              align="center"
              verticalAlign="top"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ height: 40 }}
            />
          ) : (
            <Legend
              layout="vertical"
              align="center"
              verticalAlign="top"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                right: 0,
                top: -30,
              }}
            />
          )}

          <Line
            type="monotone"
            dataKey={line1_key}
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5, strokeWidth: 1, fill: "#6366f1" }}
          />
          {line2_key && (
            <Line
              type="monotone"
              dataKey={line2_key}
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5, strokeWidth: 1, fill: "#22c55e" }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
