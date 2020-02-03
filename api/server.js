const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('../auth/authRouter');
const strainsRouter = require('../strains/strainsRouter');

const app = express();

app.get('/', (request, response) => {
    response.send({message: 'server working 🎉'});
});

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRouter);
app.use('/api/strains', strainsRouter);

module.exports = app;