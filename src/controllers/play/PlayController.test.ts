import * as supertest from 'supertest';

import {} from 'jasmine';
import { SuperTest, Test } from 'supertest';
import { cerr } from 'simple-color-print';

import TestServer from '../shared/TestServer.test';
import PlayController from './PlayController';


describe('PlayController', () => {

    const playController = new PlayController();
    let agent: SuperTest<Test>;


    beforeAll(done => {

        // Activate the routes
        const server = new TestServer();
        server.setController(playController);

        // Start supertest
        agent = supertest.agent(server.getExpressInstance());
        done();
    });


    describe('API: "/api/say-hello/:name"', () => {

        const successMsg = playController.SUC_MSG;
        const errMsg = playController.ERR_MSG;

        it(`should return a JSON object with the message "${successMsg}" and a status code of 250
            if message was successful`, done => {

            agent.get('/api/say-hello/seanmaxwell')
                .end((err, res) => {

                    if (err) { cerr(err); }

                    expect(res.status).toBe(250);
                    expect(res.body.response).toBe(successMsg);
                    done();
                });
        });

        it(`should return a JSON object with the message "${errMsg}" and a status code of 400
            if message was unsuccessful`, done => {

            agent.get('/api/say-hello/makeitfail')
                .end((err, res) => {

                    if (err) { cerr(err); }

                    expect(res.status).toBe(400);
                    expect(res.body.response).toBe(errMsg);
                    done();
                });
        });
    });
});