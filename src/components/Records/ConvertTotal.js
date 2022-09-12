export function convertTotal (balance, to) {
    let balanceString = '';

    if (to === 'string') {
        balanceString = balance
            .toFixed(2)
            .toString()
            .replace('.', ',')
            .replace('-', '');
    }
    
    return balanceString;
}