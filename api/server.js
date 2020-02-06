const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('../auth/authRouter');
const authMiddleware = require('../auth/authMiddleware');
const strainsRouter = require('../strains/strainsRouter');
const cabinetRouter = require('../cabinet/cabinetRouter');
const recommenderRouter = require('../recommender/recommenderRouter');

const app = express();

app.get('/', (request, response) => {
    response.send({message: 'server working 🎉'});
});

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRouter);
app.use('/api/strains', authMiddleware, strainsRouter);
app.use('/api/cabinet', authMiddleware, cabinetRouter);
app.use('/api/recommender', authMiddleware, recommenderRouter);

module.exports = app;