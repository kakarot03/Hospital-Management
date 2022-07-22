require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const patient = require('./routes/patientRoute');
const doctor = require('./routes/doctorRoute');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const port = process.env.PORT;

app.use(cors());
app.use('/api/v1/patient', patient);
app.use('/api/v1/doctor', doctor);

app.listen(port, () => console.log(`App listening on port ${port}!`));
