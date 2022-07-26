import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DoctorRoute from '../../Api/DoctorRoute';
import './DoctorHome.css';

const DotorHome = () => {
  const [appointmentList, setAppointmentList] = useState();
  const [doctor, setDoctor] = useState();
  const [docId, setDocId] = useState(-1);

  const getAppointment = async () => {
    try {
      const appointment = await axios.get(
        `http://localhost:5000/api/v1/doctor/getAppointments/${docId}`
      );
      await setAppointmentList(appointment.data.doctor);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/appointment/deleteAppointment/${id}`
      );
      setAppointmentList(
        appointmentList.filter((appointment) => {
          return appointment.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getDoctor = async () => {
    try {
      const doc = await DoctorRoute.get(`/getDoctor/${docId}`);
      console.log(doc.data.doctor);
      setDoctor(doc.data.doctor);
    } catch (err) {
      console.log(err.message);
    }
  };

  function reverse(str) {
    const res = str
      .split('-')
      .reduce((rev, currentChar) => currentChar + rev, '');
    return (
      res.substring(0, 2) + '-' + res.substring(2, 4) + '-' + res.substring(4)
    );
  }

  useEffect(() => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    setDocId(id);
    getAppointment();
    getDoctor();
  }, []);

  return (
    <div className="DoctorHome">
      {doctor && (
        <div
          style={{
            display: 'grid',
            marginTop: '5rem',
            gridTemplateColumns: '1fr 1fr',
          }}
          className="docDetails"
        >
          <h2>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ID&emsp;:&emsp; {docId}</h2>
          <h2 style={{ marginRight: '20rem' }}>
            &emsp; NAME&emsp;:&emsp; {doctor.name}
          </h2>
          <h2>DEPARTMENT&emsp;:&emsp; {doctor.department_id}</h2>
          <h2 style={{ marginRight: '20rem' }}>NAME&emsp;:&emsp; abc</h2>
        </div>
      )}
      <div className="main__container">
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            />
            <div className="card_inner">
              <p className="text-primary-p">Number of Patients</p>
              <span className="font-bold text-title">0</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
            <div className="card_inner">
              <p className="text-primary-p">Number of Operations</p>
              <span className="font-bold text-title">0</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            />
            <div className="card_inner">
              <p className="text-primary-p">Number of Appointments</p>
              <span className="font-bold text-title">0</span>
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
      </div>
      <div className="containerDoctorHome">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Appointment Id</div>
            <div className="col col-2">Patient Name</div>
            <div className="col col-3">Appointment Date</div>
          </li>
          {appointmentList &&
            appointmentList.map((appointment) => (
              <li className="table-row" key={appointment.id}>
                <div className="col col-1" data-label="Patient Id">
                  {appointment.id}
                </div>
                <div className="col col-2" data-label="Patient Name">
                  {appointment.patient_id}
                </div>
                <div className="col col-3" data-label="Patient Age">
                  {reverse(appointment.appointment_date.substring(0, 10))}
                </div>
                {/* {patientList[index]} */}
                <td>{/* <UpdatePatient patientId={patient.id} /> */}</td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, appointment.id)}
                    className="deleteBtn"
                  >
                    Cancel
                  </button>
                </td>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DotorHome;
