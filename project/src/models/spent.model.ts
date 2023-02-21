import { Pool, ResultSetHeader } from 'mysql2/promise';
import Spent from '../interfaces/spent.interface';

export default class SpentModel {
	public connection: Pool;

	constructor(connection: Pool) {
		this.connection = connection;
	}

	public async getAll(): Promise<Spent[]> {
		const result = await this.connection.execute('SELECT * FROM Spending');
		const [rows] = result;
		return rows as Spent[];
	}

	public async getById(id: number): Promise<Spent> {
		const result = await this.connection
			.execute('SELECT * FROM Spending WHERE id=?', [id]);
		const [rows] = result;
		const [spent] = rows as Spent[];
		return spent;
	}

	public async create(spent: Spent): Promise<Spent> {
		const { cost, dayMonth, category } = spent;
		const result = await this.connection.execute<ResultSetHeader>(
			'INSERT INTO Spending (cost, dayMonth, category) VALUES ( ?, ?, ?)',
			[cost, dayMonth, category],
		);
		const [dataInserted] = result;
		const { insertId } = dataInserted;
		return { id: insertId, ...spent };
	}
  
	public async remove(id: number) {
		await this.connection.execute(
			'DELETE FROM Spending WHERE id=?',
			[id],
		);
	}
}