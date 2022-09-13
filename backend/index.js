require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const patientRouter = require('./routes/patientRoute');
const doctorRouter = require('./routes/doctorRoute');
const appointmentRouter = require('./routes/appointmentRoute');
const generalRouter = require('./routes/generalRoute');
const { google } = require('googleapis');
const app = express();

const CLIENT_ID =
  '36172163094-ioe8jkaltnb7pno3uj72lo3692rh591f.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//048xuqzeN-cpSCgYIARAAGAQSNwF-L9IrAsntn8P8TCWrC6Plb4UL3zO16nHQxVRnGz5yydwTzf197FZKxkgY0vVDDE2GnXuUinU';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const port = process.env.PORT;

app.use(cors());
app.use('/api/v1/patient', patientRouter);
app.use('/api/v1/doctor', doctorRouter);
app.use('/api/v1/appointment', appointmentRouter);
app.use('/api/v1/general', generalRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));

// Git Testing
