import React, { useRef, useEffect } from "react"
import * as echarts from "echarts"

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.myChart = React.createRef();
    }

    componentDidMount() {
        this.setUpMyChart();
    }

    setUpMyChart() {
        const chart = echarts.init(this.myChart.current)
        chart.setOption(this.props.options);
        if (this.props.resizeObserver) {
            this.props.resizeObserver.observe(this.myChart.current);
        }
        chart.on('click', function (params) {
            console.log(params);
            chart.setOption({
                xAxis: {
                    type: 'category',
                    data: [params.data.name]
                },
                yAxis: {
                    type: 'value',
                    data: [0,10,20,30,40,50,60,70,80,90,100]
                },
                series: [
                    {
                        data: [params.data.value],
                        type: 'bar'
                    }
                ]
            })
        });
    }

    render() {
        return (
            <>
                <div
                    ref={this.myChart}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></div>
            </>
        )
    }
}

export default Chart;