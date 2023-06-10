import React, { useState, useEffect } from 'react';
import ButtonGroup from './components/ui/ButtonGroup';
import Chart from './components/ui/Chart';
import { useAppDispatch, useAppSelector } from './store/redux/hooks';
import { getChartData } from './store/redux/chartDataSlice/chartDataSlice';

function App(): JSX.Element {
  const [keyName, setKeyName] = useState('2021');


  const chartData = useAppSelector(
    (store) => store.chartStore.volume_marginality_relation,
  );

 

  return (
    <div className="App">
      <div>
        <ButtonGroup setKeyName={setKeyName} />
        <Chart chartData={chartData} keyName={keyName} />
      </div>
    </div>
  );
}

export default App;
