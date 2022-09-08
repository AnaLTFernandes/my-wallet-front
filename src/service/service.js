const users = [{ email:'eu@gmail.com', name:'bubba' }];
const allRecords = [
    {
        email:'eu@gmail.com',
        records:[
            {
                date:'06/09/2022',
                details:'vendi um negócio',
                price:'13.00',
                type:'entrada'
            },
            {
                date:'07/09/2022',
                details:'compra lá',
                price:'7.00',
                type:'saída'
            }
        ]
    },
    {
        email:'outroemail@gmail.com',
        records:[]
    }
];

function postSignIn (user) {
    const userLogin = users.find(({ email }) => email === 'eu@gmail.com');
    return userLogin;
}

function postSignUp (user) {
    users.push(user);
}

function getRecords (user) {
    const userRecords = allRecords
        .find(({ email }) => email === 'eu@gmail.com');

    return userRecords.records;
}

function postRecord (user, record) {
    const userRecords = allRecords
        .find(({ email }) => email === 'eu@gmail.com');

    userRecords.records.push({ ...record, email:'eu@gmail.com'});
}

export {
    postSignIn,
    postSignUp,
    getRecords,
    postRecord
}