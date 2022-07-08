var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    return response.artists;
};
var bar = {
    success: false,
    artists: [{ name: 'shabi' }]
};
console.log(handleArtistsResponse(bar));
