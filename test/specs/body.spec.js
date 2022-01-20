const expect = require('chai').expect;
const sendRequest = require('../utils/sendRequest');
const getUsers = require('../utils/getUsers.json');
const env = require('../utils/endpoint.js');


describe('Get users', () => {

    getUsers.map((data) => {
        let response;

        before(async () => {
            data.uri = env.jsonplaceholder + data.uri;
            response = await sendRequest(data);
        });

        it('Response should contain array of 10 users', () => {
            expect(response.body.length).to.eql(10);
        });
    });

});