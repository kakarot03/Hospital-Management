import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralRoute from '../../Api/GeneralRoute';
import './AdminAuth.css';

const AdminAuth = () => {
  const navigate = useNavigate();

  const [adminOrg, setAdminOrg] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  const getAdmin = async () => {
    try {
      const result = await GeneralRoute.get('/adminAuthServer');
      setAdminOrg(result.data.admin);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (adminOrg) {
      if (adminOrg.password === inputPassword) navigate('/admin');
      else setErrorMsg(true);
      console.log(adminOrg.password + ' ' + inputPassword);
    } else {
      setErrorMsg(true);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <div className="AdminAuth">
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
          background: '#f7f6f6',
          padding: '10rem',
          borderRadius: '5rem',
        }}
      >
        <label>
          <input
            type="text"
            onChange={(e) => setInputId(e.target.value)}
            required
          />
          <div className="label-text">Admin Id</div>
        </label>
        <label>
          <input
            type="text"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
          <div className="label-text">Password</div>
        </label>
        {errorMsg && <h3 style={{ color: 'red' }}>402! You're Unauthorized</h3>}
        <button onClick={handleFormSubmit} type="sumbit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminAuth;
