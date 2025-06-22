import axios from "axios";

export const fileUploadBaseUrl = "https://fileupload.friensys.com/api/";

export const fileApi = axios.create({
  baseURL: fileUploadBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Separate function for file/image API
// export const fileBaseFunc = (endURL) => {
//   return (method, options = {}) => {
//     const params = options.params ? `/${options.params}` : "";
//     let url = `/${endURL}${params}`;
//     if (options.postfix) {
//       url += options.postfix;
//     }

//     const headers = {
//       "Content-Type":
//         options.data instanceof FormData
//           ? "multipart/form-data"
//           : "application/json",
//     };

//     if (method.toLowerCase() === "get") {
//       return fileApi.get(url, { headers });
//     } else if (method.toLowerCase() === "post") {
//       return fileApi.post(url, options.data, { headers });
//     }
//   };
// };

// server-base.ts
export const fileBaseFunc = (endURL) => {
  return (method, options = {}) => {
    let url = `/${endURL}`;

    // Handle path parameters (now as array or string)
    if (Array.isArray(options.params)) {
      url += options.params.map(p => `/${p}`).join("");
    } else if (options.params) {
      url += `/${options.params}`;
    }

    if (options.postfix) {
      url += options.postfix;
    }

    const headers = {
      "Content-Type":
        options.data instanceof FormData
          ? "multipart/form-data"
          : "application/json",
    };

    if (method.toLowerCase() === "get") {
      return fileApi.get(url, { headers });
    } else if (method.toLowerCase() === "post") {
      return fileApi.post(url, options.data, { headers });
    }
  };
};

