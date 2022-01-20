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

        it('Response headers should contain "content-type"', () => {
            expect(response.headers['content-type']).to.exist;
        });

        it('Response header "content-type" should contain "application/json; charset=utf-8"', () => {
            expect(response.headers['content-type']).to.be.eql('application/json; charset=utf-8');
        });
    });

});