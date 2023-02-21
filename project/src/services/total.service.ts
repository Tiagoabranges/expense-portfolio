import connection from '../models/connection';
import TotalModel from '../models/total.models';
import Total from '../interfaces/total.interface';

class TotalService {
	public model: TotalModel;

	constructor() {
		this.model = new TotalModel(connection);
	}

	public async getAll(): Promise<Total[]> {
		const Total = await this.model.getAll();
		return Total;
	}
}

export default TotalService;