//need to bring in supertest

const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    it('should be set the testing env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('Get /', () => {
        //return code
        //return type
        //body share / structure
        //Without ASYNC METHOD 1
        it('should return 200 OK', () => {
            return request(server).get('/')
              .then(res => {
                  expect(res.status).toBe(200);
              });
        });

        //ASYNC
        it('should return 200 ok using async / await ', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return {api:"up"}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual(({api: 'up'}));
        });

    });
});


//Server file
// server.get("/", (req, res) => {
//     res.status(200).json({ api: "up" });
//   });
