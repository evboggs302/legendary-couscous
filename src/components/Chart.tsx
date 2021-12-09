import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData("03/2021", 220),
  createData("04/2021", 205),
  createData("05/2021", 234),
  createData("06/2021", 270),
  createData("07/2021", 265),
  createData("08/2021", 320),
  createData("09/2021", 350),
  createData("10/2021", 450),
  createData("11/2021", 486),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Household Value</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}>
              Net Assets (x1000)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
