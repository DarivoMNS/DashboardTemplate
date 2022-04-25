import React from 'react';
import './chart.css';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'November', Total: 1400000 },
  { name: 'December', Total: 2300000 },
  { name: 'January', Total: 870000 },
  { name: 'February', Total: 1700000 },
  { name: 'March', Total: 600000 },
  { name: 'April', Total: 1800000 },
];

type Props = {
  aspect: number,
  title: string
}

const Chart = (props: Props) => {
  return (
    <div className="chart">
      <div className="chartTitle">
        {props.title}
      </div>
      <ResponsiveContainer width="100%" aspect={ props.aspect }>
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Total" stroke="#00573F" activeDot={{ r: 8 }} />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart