"use client";

import React from "react";
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

interface DataPoint {
  year: number;
  count: number;
  category: string;
}

interface CensorshipChartProps {
  data: DataPoint[];
}

export default function CensorshipChart({ data }: CensorshipChartProps) {
  // Process data to group by year
  const processedData = data.reduce((acc, curr) => {
    const existingYear = acc.find((item) => item.year === curr.year);

    if (existingYear) {
      existingYear[curr.category] = curr.count;
    } else {
      acc.push({
        year: curr.year,
        [curr.category]: curr.count,
      });
    }

    return acc;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [] as any[]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={processedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(100, 234, 197, 0.1)"
        />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgb(100, 100, 100)",
            borderColor: "rgb(100, 234, 197)",
            borderRadius: "0.5rem",
          }}
        />
        <Legend />
        <Bar dataKey="Political Content" fill="rgb(100, 234, 197)" />
        <Bar dataKey="Historical Documents" fill="rgb(152, 100, 178)" />
        <Bar dataKey="Scientific Research" fill="rgb(126, 201, 100)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
