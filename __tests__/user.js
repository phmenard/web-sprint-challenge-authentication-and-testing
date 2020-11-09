const supertest = require("supertest")
const  server = require("../api/server")
const { intersect } = require("../database/dbConfig")
const db = require("../database/dbConfig")

/*beforeEach(async () => {
    await db.seed.run()
})*/


/*afterAll(async () => {
    await db.destroy()
})*/

describe("users intergration", () => {
    it("creates a new user", async () => {
        const res = await supertest(server)
            .post("/api/auth/register")
            .send({username: "steve", password: "jacob123"})
        
        expect(res.type).toBe("application/json")    
        expect(res.body.username).toBe("steve")
        expect(res.body.id).toBeDefined()
    })

    it("can log in", async () => {
        const res = await supertest(server)
            .post("/api/auth/login")
            .send({username: "steve", password: "jacob123"})
        
        expect(res.type).toBe("application/json")    
        expect(res.status).toBe(200)
        expect(res.body.message).toBe("Welcome steve")
          
    })
})
