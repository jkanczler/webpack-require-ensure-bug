// This is working as require will be compiled into a __webpack_require__ call.
require.ensure(
    ['./module'],
    function () {
        require('./module').sayHello();
    });

// This is not working, generating wrong code, as syncedRequire will be compiled into the same.
require.ensure(
    ['./module'],
    function (syncedRequire) {
        syncedRequire('./module').sayHello();
    });
