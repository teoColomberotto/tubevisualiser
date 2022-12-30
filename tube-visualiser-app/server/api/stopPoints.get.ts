import { getStopPointsListFromLocalJson } from "../../services/stopPointService";
import {
  IStopPointCrowdingList,
  IStopPointCrowding,
} from "../../typings/stopPointCrowding";

export default defineCachedEventHandler(
  async (event) => {
    let list = await getStopPointsListFromLocalJson();
    list = list.slice(0, 3);
    const stopPointCrowdingList: IStopPointCrowdingList = [];
    const promises: Array<Promise<any>> = [];
    list.forEach((point: any) => {
      const stopPointCrowding: IStopPointCrowding = {
        id: point.id,
        commonName: point.commonName,
      };
      stopPointCrowdingList.push(stopPointCrowding);
      promises.push(
        $fetch(
          `https://api.tfl.gov.uk/crowding/${point.id}/Live?app_key=aa29725050fc49b197581e6a7ee3787c`
        )
      );
    });
    Promise.all(promises).then((values) => {
      // console.log("data from api: ", values);
      values.forEach((pointData, index) => {
        stopPointCrowdingList[index].dataAvailable = pointData.dataAvailable;
        stopPointCrowdingList[index].percentageOfBaseline =
          pointData.percentageOfBaseline;
        stopPointCrowdingList[index].timeUtc = pointData.timeUtc;
        stopPointCrowdingList[index].timeLocal = pointData.timeLocal;
      });
      console.log("crowding list: ", stopPointCrowdingList);
      return stopPointCrowdingList;
    });
  },
  { swr: true }
);
