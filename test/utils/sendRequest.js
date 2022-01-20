const request = require('request-promise-native');

async function sendRestRequestWithHeader(opts) {
    let options = {
        uri: opts.uri,
        method: opts.method,
        headers: opts.header,
        body: opts.body,
        resolveWithFullResponse: true,
        json: true
    };

    return await request(options);

};

module.exports = sendRestRequestWithHeader;