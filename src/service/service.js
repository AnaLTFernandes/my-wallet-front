const users = [];

function postSignIn (user) {
    console.log(user)
}

function postSignUp (user) {
    users.push(user);
    console.log(users)
}

export {
    postSignIn,
    postSignUp
}