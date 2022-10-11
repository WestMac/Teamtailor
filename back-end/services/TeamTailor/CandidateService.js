const axios = require("axios");

class CandidateService {
  static getAllCandidates = async number => {
    const url = number
      ? `candidates?include=job-applications&fields[candidates]=first-name,last-name,email,id&fields[job-applications]=created-at,id&page[size]=30&page[number]=${number}`
      : `candidates?include=job-applications&fields[candidates]=first-name,last-name,email,id&fields[job-applications]=created-at,id&page[size]=30`;
    return await axios({
      method: "get",
      url: encodeURI(process.env.TEAMTAILOR_API_URL.concat(url)),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${process.env.TEAMTAILOR_API_KEY}`,
        "X-API-Version": process.env.TEAMTAILOR_STABLE_VERSION,
      },
    });
  };
}

module.exports = CandidateService;
