import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"

function PolarStatsArea(props) {
    const { stats } = props;

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!stats || stats.length == 0) {
            return;
        }

        const pokeData = stats.map(stat => stat.base_stat);
        const pokeLabels = stats.map(stat => stat.stat.name);

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: 'polarArea',
            data: {
                labels: pokeLabels,
                datasets: [
                    {
                        data: pokeData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(201, 203, 207, 0.2)',
                            'rgba(3, 203, 207, 0.2)',
                            'rgba(301, 203, 207, 0.2)'
                        ]
                    }
                ]
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    }, [stats]);

    return <canvas ref={chartRef} />;
}

export default PolarStatsArea;
