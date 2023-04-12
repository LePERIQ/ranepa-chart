import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { getChartData } from '../../store/redux/chartDataSlice/chartDataSlice';
import { periodDataType } from '../../store/redux/chartDataSlice/chartDataType';
import ButtonGroup from './ButtonGroup';

function Chart(): JSX.Element {
  const chartData = useAppSelector(
    (store) => store.chartData.volume_marginality_relation,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChartData());
  }, []);

  const [keyName, setKeyName] = useState('2021');

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
        data: chartData[keyName].vds_sub,
      },
      {
        name: 'Без учета субсиди',
        data: chartData[keyName].vds_wsub,
      },
    ],
  };


  return (
    chartData && (
      <div>
        <ButtonGroup setKeyName={setKeyName} />
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
