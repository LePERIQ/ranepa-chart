export type ChartDataType = {
  volume_marginality_relation: VolumeMarginalityRelation;
};

export type VolumeMarginalityRelation = {
  '2021': periodDataType;
  '2022': periodDataType;
  '2023': periodDataType;
  '2024': periodDataType;
};

export type periodDataType = {
  vds_wsub: VdsWsub[];
  vds_sub: VdsSub[];
};

export type VdsWsub = {
  name: string;
  x: number;
  y: number;
};

export type VdsSub = {
  name: string;
  x: number;
  y: number;
};



