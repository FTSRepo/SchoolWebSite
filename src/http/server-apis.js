// import { fileBaseFunc } from "./server-base";


// // Image API
// export const GetHomeImagesAPI = fileBaseFunc("Image/getImages/");

import { fileBaseFunc } from "./server-base";

const getImagesFunc = fileBaseFunc("Image/getImages");

export const GetHomeImagesAPI = (tagName, schoolId) => {
  return getImagesFunc("get", { params: [tagName, schoolId] });
};
