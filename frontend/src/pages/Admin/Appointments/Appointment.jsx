import React, { useEffect, useState } from 'react';
import AppointmentRoute from '../../../Api/AppointmentRoute';
import './Appointment.css';

const Appointment = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  const getAppointments = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const result = await AppointmentRoute.get('/getDocAndPat');
      const data = await result.data.appointments;
      await data.sort((a, b) => a.id - b.id);
      setAppointmentList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await AppointmentRoute.delete(`/deleteAppointment/${id}`);
      setAppointmentList(
        appointmentList.filter((appointment) => {
          return appointment.appointment_no !== id;
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
          {appointmentList?.map((appointment) => (
            <li className="table-row" key={appointment.id}>
              <div className="col col-1" data-label="Patient Id">
                {appointment.appointment_no}
              </div>
              <div className="col col-2" data-label="Patient Name">
                {appointment.patient}
              </div>
              <div className="col col-3" data-label="Patient Age">
                {appointment.doctor}
              </div>
              <div className="col col-4" data-label="Patient Mobile">
                {reverse(appointment.appointment_date.substring(0, 10))}
              </div>
              {/* {patientList[index]} */}
              <td>{/* <UpdatePatient patientId={patient.id} /> */}</td>
              <td>
                <button
                  onClick={(e) => handleDelete(e, appointment.appointment_no)}
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
