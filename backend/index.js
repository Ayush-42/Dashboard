import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import Connnection from './config/db.js';
import { fetchDatabase, fillDatabase } from './config/controller.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/',fillDatabase)
app.get('/details',fetchDatabase)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

Connnection()