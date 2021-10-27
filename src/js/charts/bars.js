export default {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLine: { show: true },
        axisTick: { show: true },
    },
    yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisTick: { show: false },
        data: ['Total', 'Rent', 'Utilities', 'Transportation']
    },
    series: [
        {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                }
            },
            data: [0, 100, 1400, 0]
        },
        {
            name: 'Active',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                color: 'green'
            },
            data: [900, 2200, 5400, 6200,]
        },
        {
            name: 'Break',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                color: 'orange'
            },
            data: [200, 1200, 300, 200,]
        },
        {
            name: 'Active',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                color: 'green'
            },
            data: [2900, 1200, 300, 200,]
        },
        {
            name: 'Break',
            type: 'bar',
            stack: 'Total',

            itemStyle: {
                color: 'orange'
            },
            data: [2900, 1200, 300, 200,]
        },
        {
            name: 'Active',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                color: 'green'
            },
            data: [3000, 4000, 2200, 3100,]
        },
    ]
};