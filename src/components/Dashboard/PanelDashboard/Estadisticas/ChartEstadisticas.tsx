import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

interface Estadisticas<T> {
  labels: string[];
  dataSet: T[];
  backgroundColor: string[];
  hoverBackgroundColor?: string[];
}

const ChartEstadisticas = <T,>({
  dataSet,
  labels,
  backgroundColor,
  hoverBackgroundColor,
}: Estadisticas<T>) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: labels,
      datasets: [
        {
          data: dataSet,
          backgroundColor,
          hoverBackgroundColor,
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [dataSet, labels, backgroundColor, hoverBackgroundColor]);
  return (
    <>
      <Chart
        type="pie"
        data={chartData}
        options={chartOptions}
        className=" max-w-[20rem]"
      />
    </>
  );
};

export default ChartEstadisticas;
