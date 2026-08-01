const request = require("supertest");
const app = require("../app");

describe("Banking API", () => {

    test("GET /health should return UP status", async () => {

        const response = await request(app)
            .get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
        expect(response.body.application).toBe("banking-api");

    });


    test("GET / should return application message", async () => {

        const response = await request(app)
            .get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text)
            .toBe("ABC Banking Application Running");

    });

});