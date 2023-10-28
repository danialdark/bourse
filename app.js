const soap = require('soap');
const crypto = require('crypto');

// URL of the SOAP web service WSDL
const url = 'http://94.232.171.25:11003/PublicService.svc?wsdl';

// Create a SOAP client
soap.createClient(url, (err, client) => {
    if (err) {
        console.error('Error creating SOAP client:', err);
        return;
    }

    // Set the SOAP request headers (Username and Password)
    client.setSecurity(new soap.BasicAuthSecurity('test', sha1Hash('123')));

    // Make a SOAP request to the "GetSpotOffers" method
    client.GetSpotOffers({}, (err, result) => {
        if (err) {
            console.error('SOAP request error:', err);
            return;
        }

        // Process the SOAP response
        console.log('SOAP Response:', result);
    });
});

// Function to hash a string using SHA-1
function sha1Hash(input) {
    const sha1 = crypto.createHash('sha1');
    sha1.update(input, 'utf8');
    return sha1.digest('hex');
}
