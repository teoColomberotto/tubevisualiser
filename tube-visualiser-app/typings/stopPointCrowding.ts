import { IStopPointInfo } from "./stopPointInfo";

export interface IStopPointCrowding extends IStopPointInfo {
  dataAvailable?: boolean;
  percentageOfBaseline?: number;
  timeUtc?: string;
  timeLocal?: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStopPointCrowdingList extends Array<IStopPointCrowding> {}
