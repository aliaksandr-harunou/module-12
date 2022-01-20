const expect = require('chai').expect;
const sendRequest = require('../utils/sendRequest');
const crud = require('../utils/crudGitHub.json');
const env = require('../utils/endpoint.js');


describe('GitHub gist operations', () => {

    crud.map((data) => {
        let response;

        before(async () => {
            data.uri = env.github + data.uri;
            response = await sendRequest(data);
        });

        it('Response status code should be 200', () => {
            expect(response.statusCode).to.eql(200);
        });
    });

});