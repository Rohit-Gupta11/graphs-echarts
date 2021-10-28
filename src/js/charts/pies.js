import * as echarts from "echarts";
export default {
    title: {
        text: 'Productivity (App)',
        position: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        position: 'center',
        bottom: 'bottom'
    },
    series: [
        {
            name: 'Productivity',
            type: 'pie',
            radius: '50%',
            data: [
                {
                    value: 75,
                    name: 'Productive',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'red' },
                            { offset: 0.5, color: 'orange' },
                            { offset: 1, color: 'yellow' }
                        ]),
                        borderColor: 'black'
                    }
                },
                {
                    value: 25,
                    name: 'Non Productive',
                    itemStyle: {
                        color: 'white',
                        borderColor: 'black'
                    }
                },
                { value: 0, name: 'Neutral' },
                { value: 0, name: 'Untagged' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
