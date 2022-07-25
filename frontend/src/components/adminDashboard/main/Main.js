import './Main.css';
import hello from '../assets/hello.svg';
import PatientRoute from '../../../Api/PatientRoute';
import DoctorRoute from '../../../Api/DoctorRoute';
import { useState, useEffect } from 'react';
import adminImg1 from '../assets/adminImg.jpg';
import axios from 'axios';

const Main = () => {
  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const handleCount = async () => {
    try {
      const patients = await PatientRoute.get(`/getAllPatients`);
      const doctors = await DoctorRoute.get('/getAllDoctors');
      const appointments = await axios.get(
        `http://localhost:5000/api/v1/appointment/getAllAppointments`
      );
      setPatientCount(patients.data.patients.length);
      setDoctorCount(doctors.data.doctors.length);
      setAppointmentCount(appointments.data.appointment.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleCount();
  }, []);

  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Sri</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            />
            <div className="card_inner">
              <p className="text-primary-p">Number of Patients</p>
              <span className="font-bold text-title">{patientCount}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
            <div className="card_inner">
              <p className="text-primary-p">Number of Doctors</p>
              <span className="font-bold text-title">{doctorCount}</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            />
            <div className="card_inner">
              <p className="text-primary-p">Number of Appointments</p>
              <span className="font-bold text-title">{appointmentCount}</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            />
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">67</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <img
                  src={adminImg1}
                  style={{
                    height: '380px',
                    width: '410px',
                    marginLeft: '40px',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true" />
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>₹ 68,75,300</p>
              </div>

              <div className="card2">
                <h1>Medics</h1>
                <p>₹ 124,200</p>
              </div>

              <div className="card3">
                <h1>Operations</h1>
                <p>3600</p>
              </div>

              <div className="card4">
                <h1>Hospital Cot</h1>
                <p>183</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
