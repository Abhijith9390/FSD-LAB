const http = require('http');

const options = {
    hostname: 'localhost',
    port: 8000,
    path: '/',
    method: 'GET'
};

function handleResponse(response) {
    let serverData = '';

    response.on('data', function(chunk) {
        serverData += chunk;
    });

    response.on('end', function() {
        console.log('Response Status Code:', response.statusCode);
        console.log('Response Headers:', response.headers);
        console.log('Response Body:', serverData);
    });
}

const request = http.request(options, function(response) {
    handleResponse(response);
});

request.on('error', function(error) {
    console.log('Request error:', error);
    console.log('Error code:', error.code);
});