import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralRoute from '../../../Api/GeneralRoute';
import DoctorRoute from '../../../Api/DoctorRoute';
import AppointmentModal from './Modal/AppointmentModal';
import './BookAppointment.css';

var deptList = {},
  doctorList = {},
  id = -1;

const BookAppointment = () => {
  const [doctor, setDoctor] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getDepartment = async () => {
    const url = window.location.href;
    id = url.substring(url.lastIndexOf('/') + 1);
    try {
      const res = await GeneralRoute.get(`/getDepartments`);
      deptList = res.data.department;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getDoctors = async () => {
    try {
      const result = await DoctorRoute.get('/getAllDoctors');
      const jsonData = await result.data.doctors;
      doctorList = jsonData;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (e) => {
    const id = e.target.value;
    try {
      const result = await DoctorRoute.get(`/getDoctor/${id}`);
      setDoctor(result.data.doctor);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDepartment();
    getDoctors();
  }, [window.location.href]);

  return (
    <div className="BookAppointment">
      {!doctor && (
        <p
          style={{
            position: 'fixed',
            top: '6rem',
            left: '55rem',
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          Enter the doctor id and book your appointment
        </p>
      )}
      <div className="input-container">
        <input
          type="text"
          id="number"
          onChange={handleChange}
          className="text-input"
          autoComplete="off"
          placeholder="Enter Doctor Id"
          required
        />
        <label className="label" htmlFor="name">
          Doctor Id
        </label>
      </div>
      <div className="containerBookAppointment">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Doctor Id</div>
            <div className="col col-2">Name</div>
            <div className="col col-3">Age</div>
            <div className="col col-4">Mobile</div>
          </li>
          {doctor ? (
            <li className="table-row" key={doctor.id}>
              <div className="col col-1" data-label="Doctor Id">
                {doctor.id}
              </div>
              <div className="col col-2" data-label="Doctor Name">
                {doctor.name}
              </div>
              <div className="col col-3" data-label="Doctor Age">
                {doctor.age}
              </div>
              <div className="col col-4" data-label="Doctor Mobile">
                {doctor.mobile}
              </div>
              <td className="bookModal">
                <div>
                  <AppointmentModal doc={doctor} />
                </div>
              </td>
            </li>
          ) : (
            <div>
              <p
                style={{
                  marginTop: '6rem',
                  fontSize: '16px',
                  fontWeight: '600',
                  textAlign: 'center',
                }}
              >
                could'nt find your doctor?{' '}
                <span
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={(e) => {
                    navigate('/findDoctor/' + id);
                  }}
                >
                  click here!
                </span>
              </p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BookAppointment;
