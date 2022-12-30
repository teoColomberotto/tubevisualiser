import stopPointInfo from "../assets/stoppointinfo/stopPointInfo.json";

export const getStopPointInfo = () => {
  const stopPointInfoList = [];
  stopPointInfo.stopPoints.forEach((point) => {
    const stopInfo = {
      id: point.naptanId,
      commonName: point.commonName,
    };

    stopPointInfoList.push(stopInfo);
  });
  console.log(stopPointInfoList);

  let content = JSON.stringify(stopPointInfoList);
  console.log("ready to save sample data to json");
  let a = document.createElement("a");
  let file = new Blob([content], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = "test.json";
  a.click();
  console.log("done");
};
