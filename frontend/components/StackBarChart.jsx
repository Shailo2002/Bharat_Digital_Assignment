import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,

} from "recharts";


const StackedBarChart = ({ bar1_key, bar2_key, title }) => {
  const { districtData } = useSelector((state) => state.user);
  console.log("districtData:", districtData);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={districtData}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={bar1_key} stackId="a" fill="#8884d8">
          </Bar>
          <Bar dataKey={bar2_key} stackId="a" fill="#82ca9d">
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
