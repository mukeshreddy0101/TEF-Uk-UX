import React from 'react';
import { Tooltip, CartesianGrid, XAxis, YAxis, Legend, Bar, BarChart } from "recharts";
import { connect } from 'react-redux';


const HeatMapChart = ({ data }) => {
  return (
    <>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis padding={{ left: 10, right: 10 }} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>

    </>
  )
}


const mapStateToProps = (state) => {

  return {
    data: state
  }
}
export default connect(mapStateToProps, null)(HeatMapChart);
