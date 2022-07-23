import React, { useState } from 'react';
import PatientRoute from '../../Api/PatientRoute';
import './Patient.css';

const Patient = () => {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientMobile, setPatientMobile] = useState('');
  const [patientAddress, setPatientAddress] = useState('');

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await PatientRoute.post('/addPatient', {
        name: patientName,
        age: patientAge,
        mobile: patientMobile,
        address: patientAddress,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
    setPatientName('');
    setPatientAge('');
    setPatientMobile('');
    setPatientAddress('');
  };

  return (
    <div className="Patient">
      <form className="details-form">
        <label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
          <div className="label-text">Name</div>
        </label>
        <label>
          <input
            type="text"
            value={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
            required
          />
          <div className="label-text">Age</div>
        </label>
        <label>
          <input
            type="text"
            value={patientMobile}
            onChange={(e) => setPatientMobile(e.target.value)}
            required
          />
          <div className="label-text">Mobile</div>
        </label>
        <label>
          <input
            type="text"
            value={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)}
            required
          />
          <div className="label-text">Address</div>
        </label>
        <button onClick={handleFormSubmission} type="sumbit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Patient;
