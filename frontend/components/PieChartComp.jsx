import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#facc15", "#ef4444", "#14b8a6"];

export default function PieChartComp({ title, dataKeys = [] }) {
  const { districtData } = useSelector((state) => state.user);

  const latest = districtData[districtData.length - 1];

  const pieData = dataKeys.map((key) => ({
    name: key.replace(/_/g, " "),
    value: latest?.[key] || 0,
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="65%"
            fill="#8884d8"
            label
          >
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{maxWidth:200}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
