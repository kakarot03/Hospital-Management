import React, { useEffect } from 'react';
import { useState } from 'react';
import AppointmentRoute from '../../Api/AppointmentRoute';
import DoctorRoute from '../../Api/DoctorRoute';
import './DoctorHome.css';

let patientCount = 0,
  appointmentCount = 0,
  docId = -1;

const DotorHome = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const [doctor, setDoctor] = useState({});

  const getAppointment = async () => {
    try {
      const appointment = await DoctorRoute.get(`/getAppointments/${docId}`);
      await setAppointmentList(appointment.data.doctor);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await AppointmentRoute.delete(`/deleteAppointment/${id}`);
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
      await setDoctor(doc.data.doctor);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getPatientCount = () => {
    var lis = new Set();
    for (let appointment of appointmentList) {
      lis.add(appointment.patient_id);
    }
    console.log(lis);
    return lis.size;
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
    docId = url.substring(url.lastIndexOf('/') + 1);
    getAppointment();
    getDoctor();
  }, [window.location.href]);

  console.log(doctor);

  return (
    <div className="DoctorHome">
      {doctor && (
        <div className="docDetails">
          <div
            className="details"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: '70px',
              padding: '20px',
            }}
          >
            <h2>ID</h2>
            <h2>Name</h2>
            <h2>Department ID</h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: '120px',
              padding: '5px',
            }}
          >
            <h2 style={{ marginLeft: '-3rem' }}>{doctor.id}</h2>
            <h2 style={{ marginLeft: '-9rem' }}>{doctor.name}</h2>
            <h2 style={{ marginRight: '5rem' }}>{doctor.department_id}</h2>
          </div>
        </div>
      )}
      <div className="main__container">
        <div className="main__cards" style={{ marginLeft: '30rem' }}>
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Number of Patients</p>
              <span className="font-bold text-title">{getPatientCount()}</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Number of Operations</p>
              <span className="font-bold text-title">
                {getPatientCount() - 1 < 0 ? 0 : getPatientCount() - 1}
              </span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Number of Appointments</p>
              <span className="font-bold text-title">
                {appointmentList.length}
              </span>
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
