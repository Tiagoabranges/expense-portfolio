import express from 'express';
import statusCodes from './statusCodes';
// import fetchApi from './api';
const app = express();

app.use(express.json());

const PORT = 8000;
const teams = [
	{
		id: 1,
		name: 'São Paulo Futebol Clube',
		initials: 'SPF',
	},
	{
		id: 2,
		name: 'Clube Atlético Mineiro',
		initials: 'CAM',
	},
];



// A utilização do underline antes de um parâmetro é uma boa prática quando não estamos fazendo o uso do mesmo.
app.get('/teams', (_req, res) => res.status(200).json({ teams }));


app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});