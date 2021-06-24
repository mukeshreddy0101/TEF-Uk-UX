import React from 'react';
import { connect } from 'react-redux';
import { Tooltip, CartesianGrid, XAxis, YAxis, Legend, Line, LineChart } from "recharts";


const AreaChart = ({ data }) => {
  return (
    <>
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>

    </>
  )
}

const mapStateToProps = (state) => {

  return {
    data: state
  }
}
export default connect(mapStateToProps, null)(AreaChart);
