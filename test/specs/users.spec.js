const expect = require('chai').expect;
const sendRequest = require('../utils/sendRequest');
const getUsers = require('../utils/usersData/getUsers.json');
const env = require('../utils/endpoints/endpoints');


describe('Get users', () => {

    getUsers.map((data) => {
        let response;

        before(async () => {
            data.uri = env.JSON_PLACEHOLDER + data.uri;
            response = await sendRequest(data);
        });

        it('Response status code should be 200', () => {
            expect(response.statusCode).to.eql(200);
        });

        it('Response headers should contain "content-type"', () => {
            expect(response.headers['content-type']).to.exist;
        });

        it('Response header "content-type" should contain "application/json; charset=utf-8"', () => {
            expect(response.headers['content-type']).to.be.eql('application/json; charset=utf-8');
        });

        it('Response should contain array of 10 users', () => {
            expect(response.body.length).to.eql(10);
        });
    });

});