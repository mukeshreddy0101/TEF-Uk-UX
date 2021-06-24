import React, { useState } from "react";
import './App.css';
import LineChart from "./Components/LineChart";
import HeatMapChart from "./Components/HeatMapChart";
import AreaChart from "./Components/AreaChart";
import Navbar from './Components/Navbar';
const App = () => {


  const [chartNames, setChartNames] = useState([
    { id: 1, name: "Pie Chart", componentName: <LineChart /> },
    { id: 2, name: "Bar Chart", componentName: <HeatMapChart /> },
    { id: 3, name: "Line Chart", componentName: <AreaChart /> }

  ]);

  const [isSort, setIsSort] = useState(true);

  const changeGraphsOrder = () => {
    const myChartNames = [...chartNames];
    myChartNames.sort((a, b) => {
      if (isSort) {
        return a.name < b.name && -1;
      } else {
        return a.name > b.name && -1;
      }

    });
    setIsSort(!isSort);
    setChartNames([...myChartNames]);
  };



  return (

    <div className="App">

      <Navbar />

      <div className="head">

        <ul>
          <li>
            <h1>TEF-UK UX Reporting</h1>

          </li>

          <li>
            <button style={{ padding: 10, marginLeft: 900 }} onClick={changeGraphsOrder}>change sequence</button>


          </li>

          <li>
            <button style={{ padding: 10 }} className="account-btn">Account</button>
            <button style={{ padding: 10 }} className="logout-btn">Log Out</button>

          </li>
        </ul>


      </div>
      <div>
        <ul>
          {chartNames &&
            chartNames.map((item) => {
              return (
                <li className="graphblock" key={item.id}>
                  <h2>{item.name}</h2>
                  <div>{item.componentName}</div>
                </li>
              );
            })}

        </ul>


      </div>

      <div className="footer">
        <p> Copy Right @ Nokia 2021</p>
      </div>
    </div>
  );
}

export default App;
