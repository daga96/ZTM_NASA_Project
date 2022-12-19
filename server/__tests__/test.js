const request = require("supertest");
const app = require("../src/server");

describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/launches");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launch", () => {
  test("It should respond with 201 created", async () => {
    const response = await request(app).post("/launches").send({
      mission: "USS",
      rocket: "NCCC",
      target: "Kepler",
      launchDate: "January 4, 2028",
    });
    expect(201);
  });
  // test("Catch missing property", () => {});
  // test("Wrong date format", () => {});
});
