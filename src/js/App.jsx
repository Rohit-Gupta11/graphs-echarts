import React from "react";
import Chart from "./Charts";
import line from "./charts/line";
import bars from "./charts/bars";
import pies from "./charts/pies";
import radar from "./charts/radar";
import resizeObserver from "./resizeObserver";

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Echarts in React without libraries</h1>
                <div className="App" style={{ display: "flex", flexDirection: "row" , flexWrap: "wrap"}}>
                    <div style={{ width: "50%", height: 300 }}>
                        <Chart options={bars} resizeObserver={resizeObserver} />
                    </div>
                </div>
            </>
        )
    }
}

export default App;