var moduleManager = module.exports = {}

var userList = {
    user: { id: 'user', pw: 'user' },
    pet: { id: 'pet', pw: 'pet' }
}

moduleManager.login = function (id, pw) {
    var user = userList[id];

    if (typeof (user) !== 'undefined')
        if (user.pw === pw)
            return user
    //else
    //    return undefined
}

var userTests = [
    moduleManager.login('user', 'user'),
    moduleManager.login('pet', 'blackie'),
]

//for (var i = 0; i < userTests.length; i += 1) {
//    console.log('user[' + i + '] = ' + JSON.stringify(userTests[i]));
//}
