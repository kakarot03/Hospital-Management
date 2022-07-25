import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import bg from '../../components/image/doctors.png';
import DoctorRoute from '../../Api/DoctorRoute';

const Doctor = () => {
  const navigate = useNavigate();

  const [doctorList, setDoctorList] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  const getDoctors = async () => {
    try {
      const result = await DoctorRoute.get('/getAllDoctors');
      const jsonData = await result.data.doctors;
      setDoctorList(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const doctor = doctorList.find((doc) => doc.id === parseInt(inputId));

    if (doctor) {
      if (doctor.password === inputPassword)
        navigate(`/doctorHome/${doctor.id}`);
      else setErrorMsg(true);
    } else {
      setErrorMsg(true);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div className="Doctor">
      <img
        src={bg}
        style={{
          opacity: '0.08',
          width: '65%',
          marginLeft: '25rem',
          marginTop: '10rem',
        }}
      />
      <h2
        style={{
          position: 'absolute',
          textAlign: 'center',
          top: '0',
          marginTop: '5rem',
          marginLeft: '63rem',
        }}
      >
        Login with your credentials
      </h2>
      <form
        style={{
          background: 'white',
          padding: '10rem',
          borderRadius: '5rem',
          opacity: '.8',
          color: 'green',
        }}
      >
        <label>
          <input
            type="text"
            onChange={(e) => setInputId(e.target.value)}
            required
          />
          <div className="label-text">Doctor Id</div>
        </label>
        <label>
          <input
            type="text"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
          <div className="label-text">Password</div>
        </label>
        {errorMsg && <h3 style={{ color: 'red' }}>Invalid Credentials!</h3>}
        <button onClick={handleFormSubmit} type="sumbit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Doctor;
