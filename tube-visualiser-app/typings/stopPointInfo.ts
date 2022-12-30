export interface IStopPointInfo {
  id: string | undefined;
  commonName: string | undefined;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStopPointInfoList extends Array<IStopPointInfo> {}

export interface IStopPointsList {
  $type: string | undefined;
  stopPoints: any | undefined;
  pageSize: number | undefined;
  total: number | undefined;
  page: number | undefined;
}
