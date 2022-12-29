export interface IStopPointInfo {
  id: string | undefined;
  commonName: string | undefined;
}

export interface IStopPointsList {
  $type: string | undefined;
  stopPoints: any | undefined;
  pageSize: number | undefined;
  total: number | undefined;
  page: number | undefined;
}
