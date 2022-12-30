import { StopPointModes } from "../typings/StopPointMode";

export const replaceString = (
  string: string,
  match: string,
  replacement: string
) => {
  const newstr: string = string.replace(match, replacement);
  return newstr;
};

export const trimStopPointNames = (string: string, mode: StopPointModes) => {
  if (mode === StopPointModes.tube) {
    console.log("trim tube name");
    const newName: string = replaceString(string, " Underground Station", "");
    return newName;
  } else if (mode === StopPointModes.dlr) {
    console.log("trim dlr name");
    const newName: string = replaceString(string, " Dlr Station", "");
    return newName;
  }
};
