import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientRoute from '../../Api/PatientRoute';
import './Patient.css';

const Patient = () => {
  const [patientList, setPatientList] = useState();
  const [patientId, setPatientId] = useState(null);
  const [inputId, setInputId] = useState(0);
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientMobile, setPatientMobile] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [classSignup1, setClassSignup1] = useState('');
  const [classSignup2, setClassSignup2] = useState('signinPatientNone');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    let flag = true;
    try {
      for (var i = 0; i < patientList.length; i++) {
        if (patientList[i].id == inputId) {
          navigate(`/patientHome/${inputId}`);
          flag = false;
          return;
        }
      }
    } catch (err) {
      console.log(err.message);
    }
    if (flag) setError(true);
  };

  const getPatients = async () => {
    try {
      const res = await PatientRoute.get(`/getAllPatients`);
      await setPatientList(res.data.patients);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await PatientRoute.post('/addPatient', {
        name: patientName,
        age: patientAge,
        mobile: patientMobile,
        address: patientAddress,
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
    setPatientName('');
    setPatientAge('');
    setPatientMobile('');
    setPatientAddress('');
    await getPatients();
    setPatientId(patientList[patientList.length - 1].id);
    setTimeout(() => {
      navigate(`/patientHome/${patientList[patientList.length - 1].id}`);
    }, 3000);
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="Patient">
      {patientId && (
        <h2
          style={{
            textAlign: 'center',
            marginTop: '5rem',
            color: 'green',
          }}
        >
          Your Patient Id : {patientId}
        </h2>
      )}
      {!patientId && (
        <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>
          Enter your Details to continue
        </h2>
      )}
      <form className="details-form">
        <div className={classSignup1}>
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
            {patientId ? 'Redirecting...' : 'Submit'}
          </button>
        </div>
        <div className={classSignup2}>
          <label>
            <input
              type="text"
              onChange={(e) => setInputId(e.target.value)}
              required
            />
            <div className="label-text">Patient Id</div>
          </label>
          {error && <h2 style={{ color: 'red' }}>Invalid Id</h2>}
          <button onClick={handleSignin} type="sumbit">
            {patientId ? 'Redirecting...' : 'Submit'}
          </button>
        </div>
        <h4 className={classSignup1} style={{ marginTop: '5rem' }}>
          Already registered?{' '}
          <a
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => {
              setClassSignup1('signupPatientNone');
              setClassSignup2('signinPatient');
            }}
          >
            Click here
          </a>
        </h4>
        <h4 className={classSignup2} style={{ marginTop: '5rem' }}>
          New to SHC?{' '}
          <a
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => {
              setClassSignup1('signupPatient');
              setClassSignup2('signinPatientNone');
            }}
          >
            Click here
          </a>
        </h4>
      </form>
    </div>
  );
};

export default Patient;
