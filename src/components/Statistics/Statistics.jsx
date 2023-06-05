import React, {useState,useEffect } from "react";
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
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
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
/*      const [data, setData] = useState([]); */
const data =useLoaderData();
console.log(data);
  /*    useEffect(() => {
       
         .then((res) => res.json())
         .then((data) => setData(data));
     }, []); */
     
  return (
    <div>
      <HeaderBanner>Statistics</HeaderBanner>
      <div className="container mx-auto py-5 my-5">
      <ResponsiveContainer  width={"100%"} aspect={3}>
      <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
