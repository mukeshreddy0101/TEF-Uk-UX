import LineChart from "./Components/LineChart";
import HeatMapChart from "./Components/HeatMapChart";
import AreaChart from "./Components/AreaChart";

export const graphsData =

    [
        { name: "Hyderabad", value: 20000000 },
        { name: "Bangalore", value: 15000000 },
        { name: "Chennai", value: 10000000 },
        { name: "Delhi", value: 5000000 },
    ]

export const chartNames1 =
    [
        { id: 1, name: "Pie Chart", componentName: <LineChart /> },
        { id: 2, name: "Bar Chart", componentName: <HeatMapChart /> },
        { id: 3, name: "Line Chart", componentName: <AreaChart /> }

    ]