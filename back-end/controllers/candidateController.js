const { delay } = require("../helpers/delay");
const { getMorePages } = require("../helpers/getMorePages");
const { Logger } = require("../helpers/logger");
const { saveCsv } = require("../helpers/saveFile");
const CandidateService = require("../services/TeamTailor/CandidateService");

module.exports.getCandidates = async (req, res, next) => {
  let arrayOfCandidates = [];
  try {
    const {
      data: { data = [], included = [], meta },
    } = await CandidateService.getAllCandidates();

    const candidates = data.map(({ id, attributes }, index) => {
      return {
        candidate_id: id,
        ...attributes,
        job_application_id: included[index].id || null,
        job_application_created_at: included[index].attributes["created-at"] || null,
      };
    });

    arrayOfCandidates.push(...candidates);

    if (meta["page-count"] > 1) {
      arrayOfCandidates = await getMorePages(CandidateService.getAllCandidates, meta["page-count"], arrayOfCandidates);
    }

    const result = saveCsv(arrayOfCandidates);
    return res.download(result);
  } catch (err) {
    Logger.error(`Candidate Controller error: ${err}`);
    const message = err.message ? err.message : "Opsss... Something went wrong";
    return res.status(500).send(message);
  }
};
