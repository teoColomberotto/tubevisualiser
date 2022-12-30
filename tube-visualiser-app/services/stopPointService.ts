import stopPointInfo from "../assets/stoppointinfo/stopPointInfoShort.json";
import { IStopPointInfoList, IStopPointInfo } from "../typings/stopPointInfo";

export const getStopPointsListFromLocalJson = () => {
  const source: Array<object> = stopPointInfo;
  const stopPointsList: IStopPointInfoList = [];

  source.forEach((stopPoint: any) => {
    const stopPointInfo: IStopPointInfo = {
      id: stopPoint.id,
      commonName: stopPoint.commonName,
    };
    stopPointsList.push(stopPointInfo);
  });
  return stopPointsList;
};
