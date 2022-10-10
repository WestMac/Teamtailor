import axios from "axios";
export default class CandidateService {
  static get = async (url, params = {}) => {
    const apiUrl = new URL(process.env.REACT_APP_API_PATH + url);
    const data = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "blob",
    }).then(response => {
      const fileName = response.headers["content-disposition"].match('"([^"]*)"')[1];
      const href = URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
    return data;
  };
}
