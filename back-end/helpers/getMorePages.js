const { delay } = require("../helpers/delay");

module.exports.getMorePages = async (service, pageCount, arrayOfData) => {
  for (let i = 2; i <= pageCount; i++) {
    const {
      data: { data, included },
      headers,
    } = await service(i);

    const requestedResource = data.map(({ id, attributes }, index) => {
      return {
        candidate_id: id,
        ...attributes,
        job_application_id: included[index].id || null,
        job_application_created_at: included[index].attributes["created-at"] || null,
      };
    });

    headers["x-rate-limit-remaining"] < 5 ? await delay(2500) : arrayOfData.push(...requestedResource);
  }
  return arrayOfData;
};
