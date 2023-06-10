import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '../hooks';
import type { ChartDataType } from './chartDataType';

// Define the initial state using that type
const initialState: ChartDataType = {
  volume_marginality_relation: {
    '2021': {
      vds_wsub: [],
      vds_sub: [],
    },
    '2022': {
      vds_wsub: [],
      vds_sub: [],
    },
    '2023': {
      vds_wsub: [],
      vds_sub: [],
    },
    '2024': {
      vds_wsub: [],
      vds_sub: [],
    },
  },
};

export const chartDataSlice = createSlice({
  name: 'chartStore',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<ChartDataType>) =>
      action.payload,
  },
});

export const { setChartData } = chartDataSlice.actions;

export const getChartData = (): AppThunk => (dispatch) => {
  axios<ChartDataType>(`https://iori3.ranepa.ru/science_api/v1/oil_refining/1/`)
    .then((res) => dispatch(setChartData(res.data)))
    .catch(console.log);
};

export default chartDataSlice.reducer;
