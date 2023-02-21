import express from 'express';
import spentRouter from './routes/spent.routes';
import totalRouter from './routes/total.routes';


const app = express();

app.use(express.json());

app.use('/spent',spentRouter);
app.use('/total',totalRouter);

export default app;
