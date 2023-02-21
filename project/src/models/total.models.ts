import { Pool } from 'mysql2/promise';
import Total from '../interfaces/total.interface';

export default class TotalModel {
	public connection: Pool;

	constructor(connection: Pool) {
		this.connection = connection;
	}

	public async getAll(): Promise<Total[]> {
		const result = await this.connection.execute('SELECT SUM(cost) AS total FROM Spending');
		const [rows] = result;
		return rows as Total[];
	}


}