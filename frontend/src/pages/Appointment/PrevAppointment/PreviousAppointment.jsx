import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentRoute from '../../../Api/AppointmentRoute';
import PatientRoute from '../../../Api/PatientRoute';
import image from '../../../components/image/Bg1.jpg';
import './PreviousAppointment.css';

let patId = -1;

const PreviousAppointment = () => {
  const [appointmentList, setAppointmentList] = useState();
  const navigate = useNavigate();

  const getAppointment = async () => {
    try {
      const appointment = await PatientRoute.get(`/getAppointments/${patId}`);
      await setAppointmentList(appointment.data.patient);
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
    patId = url.substring(url.lastIndexOf('/') + 1);
    console.log(patId);
    getAppointment();
  }, [window.location.href]);

  console.log(appointmentList);

  return (
    <div className="PrevAppointment">
      <div className="containerPrevAppointment">
        <ul className="responsive-table">
          {appointmentList?.length !== 0 ? (
            <li className="table-header">
              <div className="col col-1">Appointment Id</div>
              <div className="col col-2">Patient Name</div>
              <div className="col col-3">Appointment Date</div>
            </li>
          ) : (
            <div
              className="NoAppointment"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-13rem',
                maxHeight: '80vh',
              }}
            >
              <h2>No Appointment has been booked</h2>
              <h3 style={{ textAlign: 'center' }}>
                <span
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={(e) => {
                    navigate(-1);
                  }}
                >
                  Click here&ensp;
                </span>
                to Book one!
              </h3>
              <img src={image} />
            </div>
          )}
          {appointmentList?.map((appointment) => (
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

export default PreviousAppointment;
