const expect = require('chai').expect;
const sendRequest = require('../utils/sendRequest');
const createData = require('../utils/gitHub_data/createGist.json');
const updateData = require('../utils/gitHub_data/updateGist.json');
const deleteData = require('../utils/gitHub_data/deleteGist.json');
const getData = require('../utils/gitHub_data/getGist.json');
const env = require('../utils/endpoints/endpoints');


describe('GithubGist operations', () => {
    let createResponse;
    let getResponse;
    let updateResponse;
    let deleteResponse;
    let createdGistId;
    let secondGetResponse;

    before(async () => {
        createData.uri = env.GITHUB + createData.uri;
        createResponse = await sendRequest(createData);
        createdGistId = createResponse.body.id;
        getData.uri = env.GITHUB + getData.uri;
        getResponse = await sendRequest(getData);
        updateData.uri = env.GITHUB + updateData.uri + createdGistId;
        updateResponse = await sendRequest(updateData);
        deleteData.uri = env.GITHUB + deleteData.uri + createdGistId;
        deleteResponse = await sendRequest(deleteData);
        secondGetResponse = await sendRequest(getData);
    });

    it(`Response status code for gist creation should be 201`, () => {
        expect(createResponse.statusCode).to.eql(201);
    });

    it(`Created gistContent should have "Hello_worlddddddd"`, () => {
        expect(createResponse.body.files['hello.js'].content).to.eql("Hello_worlddddddd");
    });

    it(`Number of gists should be 1`, () => {
        expect(getResponse.body.length).to.eql(1);
    });

    it(`Description should be updated to "new description"`, () => {
        expect(updateResponse.body.description).to.eql("new description");
    });

    it(`Response status code after deleting should be 204`, () => {
        expect(deleteResponse.statusCode).to.eql(204);
    });

    it(`Response body after deleting should be empty`, () => {
        expect(deleteResponse.body).to.eql(undefined);
    });

    it(`Number of gists should be 0`, () => {
        expect(secondGetResponse.body.length).to.eql(0);
    });
});