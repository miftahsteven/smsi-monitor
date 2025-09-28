
//  Chartist  chart1
export const ChartistData1 = {
    labels: [1, 2, 3],
    series: [
        [2, 4, 2]
    ]
};

 

export const eventHandlers = [{
    event: 'created',
    fn(data) {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient-a',
            x1: 0,
            y1: 0,
            x2: 10,
            y2: 10
        }).elem('stop', {
            offset: 0,
            'stop-color': '#4d8aff'
        }).parent().elem('stop', {
            offset: 100,
            'stop-color': 'transparent'
        });
    }
}];

//  Chartist  chart1 End

// **************************************************************************

//  Chartist  chart2


export const ChartistData2 = {
    labels: [1, 2, 3],
    series: [
        [4, 2, 4]
    ]
};

//  Chartist  chart2  End

// *******************************************************************

//  Chartist  chart3  Start


export const ChartistData3 = {
    labels: [1, 3, 5],
    series: [
        [4, 1,3]
    ]
};

//  Chartist  chart3  End

// *******************************************************************

//  Chartist  chart4  Start

export const ChartistData4 = {
    labels: [1, 2, 3],
    series: [
        [2, 4, 1]
    ]
};

//  Chartist  chart4  End