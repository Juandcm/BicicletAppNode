import mysql from "mysql"
class Db {
	constructor() {
		this.connection = mysql.createPool({
			connectionLimit: 100,
			// host: 'db4free.net',
			// user: 'bicicletappbd',
			// password: 'bicicletappbd',
			// database: 'bicicletappbd',
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'pruebachat',
			debug: false
		});
	}
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err)
					return reject(err);
				resolve(rows);
			});
		});
	}
	close() {
		return new Promise((resolve, reject) => {
			this.connection.end(err => {
				if (err)
					return reject(err);
				resolve();
			});
		});
	}
}
module.exports = new Db();
