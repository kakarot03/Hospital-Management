import React, { useEffect } from 'react';
import { useState } from 'react';
import './PatientDetails.css';
import PatientRoute from '../../../Api/PatientRoute';
import UpdatePatient from './UpdatePatient/UpdatePatient';

const PatientDetails = () => {
  const [patientList, setPatientList] = useState([]);

  const getPatients = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const result = await PatientRoute.get('/getAllPatients');
      const jsonData = await result.data.patients;
      setPatientList(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await PatientRoute.delete(`/deletePatient/${id}`);
      setPatientList(
        patientList.filter((patient) => {
          return patient.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="PatientDetails">
      <div className="containerPatient">
        <h2>Patient List</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Patient Id</div>
            <div className="col col-2">Patient Name</div>
            <div className="col col-3">Patient Age</div>
            <div className="col col-4">Patient Mobile</div>
          </li>
          {patientList.map((patient) => (
            <li className="table-row" key={patient.id}>
              <div className="col col-1" data-label="Patient Id">
                {patient.id}
              </div>
              <div className="col col-2" data-label="Patient Name">
                {patient.name}
              </div>
              <div className="col col-3" data-label="Patient Age">
                {patient.age}
              </div>
              <div className="col col-4" data-label="Patient Mobile">
                {patient.mobile}
              </div>
              <td>
                <UpdatePatient patientId={patient.id} />
              </td>
              <td>
                <button
                  onClick={(e) => handleDelete(e, patient.id)}
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

export default PatientDetails;
