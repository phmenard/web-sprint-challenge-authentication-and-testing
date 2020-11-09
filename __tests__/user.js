const supertest = require("supertest")
const  server = require("../api/server")
const { intersect } = require("../database/dbConfig")
const db = require("../database/dbConfig")


describe("users intergration", () => {
    it("creates a new user", async () => {
        const res = await supertest(server)
            .post("/api/auth/register")
            .send({username: "paul", password: "jacob123"})
        
        expect(res.type).toBe("application/json")    
        expect(res.body.username).toBe("paul")
        expect(res.body.id).toBeDefined()
    })
})
