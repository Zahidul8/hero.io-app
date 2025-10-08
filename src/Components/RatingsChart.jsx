import React from "react";
import {  BarChart,  Bar,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer,  Legend,} from "recharts";

const RatingsChart = ({ratings}) => {

  return (
    <div className="w-full h-[400px] my-[40px] pb-10 border-b border-gray-400">
      <h2 className="text-[#001931] text-2xl font-semibold"> Ratings </h2>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 20, right: 30, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" barSize={25} name="Rating Count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
