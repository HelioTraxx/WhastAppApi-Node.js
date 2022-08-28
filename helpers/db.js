const mysql = require('mysql2/promise');

const createConnection = async () => {
    return await mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '..Traxx096',
    database: 'bootdevel',
});
}

const getReply = async (keyword) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT message FROM message WHERE keyword like ?', [keyword]);
    if (rows.lenght > 0) return rows[0].message;
    return false;
}

module.exports = {
    createConnection,
    getReply
}