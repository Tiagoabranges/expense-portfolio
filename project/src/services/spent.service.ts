import connection from '../models/connection';
import SpentModel from '../models/spent.model';
import Spent from '../interfaces/spent.interface';
import {  NotFoundError } from 'restify-errors';

class SpentService {
	public model: SpentModel;

	constructor() {
		this.model = new SpentModel(connection);
	}

	public async getAll(): Promise<Spent[]> {
		const Spents = await this.model.getAll();
		return Spents;
	}

	public async getById(id: number): Promise<Spent> {
		const spent = await this.model.getById(id);
		return spent;
	}

	public create(spent: Spent): Promise<Spent> {
		return this.model.create(spent);
	}
  
	public async remove(id: number): Promise<void> {
		const spentFound = await this.model.getById(id);
		if (!spentFound) {
			throw new NotFoundError('Spent not found!');
		}

		this.model.remove(id);
	}
}

export default SpentService;