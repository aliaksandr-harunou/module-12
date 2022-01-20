const expect = require('chai').expect;
const sendRequest = require('../utils/sendRequest');
const getUsers = require('../utils/getUsers.json');
const env = require('../utils/endpoint');


describe('Get users', () => {

    getUsers.map((data) => {
        let response;

        before(async () => {
            data.uri = env.jsonplaceholder + data.uri;
            response = await sendRequest(data);
        });

        it('Response status code should be 200', () => {
            expect(response.statusCode).to.eql(200);
        });
    });

});