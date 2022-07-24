import React, { useEffect } from 'react';
import { useState } from 'react';
import './DoctorDetails.css';
import DoctorRoute from '../../../Api/DoctorRoute';
import UpdateDoctor from './UpdateDoctor/UpdateDoctor';

const DoctorDetails = () => {
  const [doctorList, setDoctorList] = useState([]);

  const getDoctors = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const result = await DoctorRoute.get('/getAllDoctors');
      const jsonData = await result.data.data.doctors;
      setDoctorList(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await DoctorRoute.delete(`/deleteDoctor/${id}`);
      setDoctorList(
        doctorList.filter((doctor) => {
          return doctor.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="DoctorDetails">
      <div className="containerDoctor">
        <h2>Patient List</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Doctor Id</div>
            <div className="col col-2">Doctor Name</div>
            <div className="col col-3">Mobile</div>
            <div className="col col-4">Dept Id</div>
          </li>
          {doctorList &&
            doctorList.map((doctor) => (
              <li className="table-row" key={doctor.id}>
                <div className="col col-1" data-label="Doctor Id">
                  {doctor.id}
                </div>
                <div className="col col-2" data-label="Doctor Name">
                  {doctor.name}
                </div>
                <div className="col col-3" data-label="Doctor Age">
                  {doctor.mobile}
                </div>
                <div className="col col-4" data-label="Doctor Mobile">
                  {doctor.department_id}
                </div>
                <td>
                  <UpdateDoctor doctorId={doctor.id} />
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, doctor.id)}
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

export default DoctorDetails;
