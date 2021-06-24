import React from 'react'
import { PieChart, Pie, Tooltip } from "recharts";
import { connect } from 'react-redux';


const LineChart = ({ data }) => {
    return (
        <>
            <PieChart width={400} height={300}>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
                <Tooltip />
            </PieChart>

        </>
    )
}


const mapStateToProps = (state) => {

    return {
        data: state
    }
}
export default connect(mapStateToProps, null)(LineChart);

