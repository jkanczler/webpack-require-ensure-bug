// This is working as require will be compiled into a __webpack_require__ call.
require.ensure(
    ['./module'],
    function () {
        document.body.children[0].innerHTML = require('./module')();
    });

// This is not working, generating wrong code, as syncedRequire will be compiled into the same.
require.ensure(
    ['./module'],
    function (syncedRequire) {
        try {
            document.body.children[1].innerHTML = syncedRequire('./module')();
        } catch(error) {
            // Shows: TypeError: Cannot read property 'call' of undefined
            document.body.children[1].innerHTML = error;
        }
    });
