import { Request, Response } from 'express';
import StatusCodes from '../../statusCodes';
import SpentService from '../services/spent.service';

class SpentController {
	constructor(private spentService = new SpentService()) { }

	public getAll = async (_req: Request, res: Response) => {
		const spent = await this.spentService.getAll();
		return res.status(StatusCodes.OK).json(spent);
	};

	public getById = async (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		const spent = await this.spentService.getById(id);

		if (!spent) {
			return res.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Spent not found!'});
		}

		res.status(StatusCodes.OK).json(spent);
	};

	public create = async (req: Request, res: Response) => {
		const spent = req.body;
		const newSpent = await this.spentService.create(spent);
		console.log(newSpent);
    
		return res.status(StatusCodes.CREATED).json('gasto cadastrado com sucesso');
	};

	public remove = async (req: Request, res: Response) => {
		const id = Number(req.params.id);
		await this.spentService.remove(id);

		res.status(StatusCodes.NO_CONTENT).end();
	};
}

export default SpentController;