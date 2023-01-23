import React, { useState } from "react";
import Chart from "./components/Chart";

function App() {
  const [eventName, setEventName] = useState();

  return (
    <div>
      <h2>Highcharts</h2>
      <Chart onEvent={setEventName} />
      <h1>{eventName}</h1>
    </div>
  );
}

export default App;
