import React, {useState,useEffect } from "react";
import {
  AreaChart,
  BarChart,
  Area,Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
       fetch("/assignmentnumber.json")
         .then((res) => res.json())
         .then((data) => setData(data));
     }, []);
  return (
    <div>
      <div>Assignment NUmbers</div>
        <BarChart
          width={800}
          height={400}
          data={data}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="number"
            fill="#8884d8"
          />
        </BarChart>
    </div>
  );
};

export default Statistics;
