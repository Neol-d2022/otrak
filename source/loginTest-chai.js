var assert = require('chai').assert;
describe('login', function () {
    var moduleManager = require('./manager.js')
    describe('login-user-user', function () {
        it('should return a user object', function () {
            assert.equal('user', moduleManager.login('user', 'user').id);
        });
    });
    describe('login-pet-blackie', function () {
        it('should fail(return undefined)', function () {
            assert.isUndefined(moduleManager.login('pet', 'blackie'));
        });
    });
    describe('login-dog-cat', function () {
        it('should fail(return undefined)', function () {
            assert.isUndefined(moduleManager.login('dog', 'cat'));
        });
    });
});
