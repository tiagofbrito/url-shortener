function rString(len) {
    let rString = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < len; i++) {
        rString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return rString;
}

module.exports = {rString};