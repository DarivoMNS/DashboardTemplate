import React from 'react';
import './pie.css';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

type Props = {
    aspect: number,
    title: string,
}

const PieChartComp = (props: Props) => {
  return (
    <div className="pie">
        <div className="pieTitle">
            {props.title}
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={ 600 }>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
            </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComp