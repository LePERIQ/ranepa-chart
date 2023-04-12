import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { getChartData } from '../../store/redux/chartDataSlice/chartDataSlice';
import { periodDataType } from '../../store/redux/chartDataSlice/chartDataType';

function Chart(): JSX.Element {
  const chartData = useAppSelector(
    (store) => store.chartData.volume_marginality_relation,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChartData());
  }, []);

  const [dataChartState, setDataChartState] = useState<periodDataType>();

  useEffect(()=> {
      setDataChartState(chartData[2021]);
  }, [])

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Валовая добавленная стоимость НПЗ относительно обьема переработанного нефтяного сырья',
    },

    xAxis: {
      title: {
        text: 'Переработанное нефтяное сырье с накопленным итогом, тонн',
      },
    },
    yAxis: {
      title: {
        text: 'ВДС НПЗ.руб/тонну',
      },
    },
    plotOptions: {
      line: {
        enableMouseTracking: true,
        marker: {
          enabled: true,
          lineColor: '#333',
        },
      },
      spline: {
        marker: {
          enabled: true,
          lineColor: '#333',
        },
      },
    },
    series: [
      {
        name: 'С учетом субсидии',
        data: dataChartState?.vds_sub,
      },
      {
        name: 'Без учета субсиди',
        data: dataChartState?.vds_wsub,
      },
    ],
  };

  console.log('render');

  return (
    chartData && (
      <div>
        <div>
          <button
            type="button"
            onClick={() => setDataChartState(chartData[2021])}
          >
            2021
          </button>
          <button
            type="button"
            onClick={() => setDataChartState(chartData[2022])}
          >
            2022
          </button>
          <button
            type="button"
            onClick={() => setDataChartState(chartData[2023])}
          >
            2023
          </button>
          <button
            type="button"
            onClick={() => setDataChartState(chartData[2024])}
          >
            2024
          </button>
        </div>
        <div style={{ width: '70vh', height: '20vh' }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            immutable="true"
            constructorType="chart"
          />
        </div>
      </div>
    )
  );
}

export default React.memo(Chart);
