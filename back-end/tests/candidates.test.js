const request = require("supertest");
const app = require("../app");

describe("Test", () => {
  it("GET /candidates", () => {
    return request(app).get("/candidates").expect("Access-Control-Expose-Headers", "Content-Disposition").expect(200);
  });
});
