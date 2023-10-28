const soap = require('soap');
const crypto = require('crypto');

async function test() {
    const url = 'http://94.232.171.25:11003/PublicService.svc';

    const client = await soap.createClientAsync(url, {
        binding: 'http://schemas.xmlsoap.org/wsdl/soap/http',
        security: {
            mode: 'WS',
            username: 'chartix',
            password: hashToSHA1('P(&e6]8Dyk}tr>)'),
        },
        wsdl_options: {
            // Set any additional options here.
        },
    });

    const result = await client.GetSpotOffersAsync();

    console.log(result);
}

function hashToSHA1(input) {
    const sha1 = crypto.createHash('sha1');
    sha1.update(input, 'utf8');
    return sha1.digest('hex');
}

test();
