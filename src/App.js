import React, { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar';
// eslint-disable-next-line no-unused-vars
import { chartNames1 } from "./config";
const App = () => {


  const [chartNames, setChartNames] = useState(chartNames1);

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
