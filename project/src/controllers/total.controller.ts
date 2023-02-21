import { Request, Response } from 'express';
import StatusCodes from '../../statusCodes';
import TotaltService from '../services/total.service';

class TotalController {
	constructor(private totalService = new TotaltService()) {}

	public getAll = async (_req: Request, res: Response) => {
		const spent = await this.totalService.getAll();
		return res.status(StatusCodes.OK).json(spent);
	};
}
export default TotalController;
