import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PatientRoute from '../../../Api/PatientRoute';
import DoctorRoute from '../../../Api/DoctorRoute';
import './Appointment.css';

var array1 = [],
  array2 = [];

const Appointment = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  const getAppointments = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const result = await axios.get(
        'http://localhost:5000/api/v1/appointment/getAllAppointments'
      );
      const jsonData = await result.data.appointment;
      await jsonData.sort((a, b) => a.id - b.id);
      setAppointmentList(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const getPatient = async (id) => {
    try {
      const patient = await axios.get(
        `http://localhost:5000/api/v1/appointment/getPatient/${id}`
      );
      const name = await JSON.stringify(patient.data.patient.name);
      array1.push(name.replaceAll('"', ''));
    } catch (err) {
      console.log(err.message);
    }
  };

  const getDoctor = async (id) => {
    try {
      const doctor = await axios.get(
        `http://localhost:5000/api/v1/appointment/getDoctor/${id}`
      );
      const name = await JSON.stringify(doctor.data.doctor.name);
      array2.push(name.replaceAll('"', ''));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAppointments();
    appointmentList.forEach(async (app) => {
      getPatient(app.id);
    });
    appointmentList.forEach(async (app) => {
      getDoctor(app.id);
    });
    return () => {
      console.log('This will be logged on unmount');
    };
  }, []);

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

  function reverse(str) {
    const res = str
      .split('-')
      .reduce((rev, currentChar) => currentChar + rev, '');
    return (
      res.substring(0, 2) + '-' + res.substring(2, 4) + '-' + res.substring(4)
    );
  }

  return (
    <div className="Appointment">
      <div className="containerAppointment">
        <h2>Appointment List</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Appointment Id</div>
            <div className="col col-2">Patient Name</div>
            <div className="col col-3">Doctor Name</div>
            <div className="col col-4">Appointment Date</div>
          </li>
          {array1 &&
            appointmentList?.map((appointment, index) => (
              <li className="table-row" key={appointment.id}>
                <div className="col col-1" data-label="Patient Id">
                  {appointment.id}
                </div>
                <div className="col col-2" data-label="Patient Name">
                  {array1[index]}
                </div>
                <div className="col col-3" data-label="Patient Age">
                  {array2[index]}
                </div>
                <div className="col col-4" data-label="Patient Mobile">
                  {reverse(appointment.appointment_date.substring(0, 10))}
                </div>
                {/* {patientList[index]} */}
                <td>{/* <UpdatePatient patientId={patient.id} /> */}</td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, appointment.id)}
                    className="deleteBtn"
                  >
                    Delete
                  </button>
                </td>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointment;
