const request = require("supertest");
const app = require("../app");

describe("Banking API", () => {
    test("GET /health should return application health", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status: "UP",
            application: "banking-api",
            version: "1.0.1"
        });
    });

    test("GET / should return application message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("ABC Banking Application Running");
    });
});