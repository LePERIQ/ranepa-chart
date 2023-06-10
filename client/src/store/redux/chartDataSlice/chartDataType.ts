export type ChartDataType = {
  volume_marginality_relation: VolumeMarginalityRelation;
};

export type VolumeMarginalityRelation = {
  [key: string] : periodDataType
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



