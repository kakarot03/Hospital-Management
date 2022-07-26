import React from 'react';
import './PatientHome.css';
import { useNavigate } from 'react-router-dom';
import PH1 from '../../components/image/PH1.jpg';
import PH2 from '../../components/image/PH2.jpg';
import PH3 from '../../components/image/PH3.jpg';
import { useEffect } from 'react';
import { useState } from 'react';

const PatientHome = () => {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState(null);

  const setId = () => {
    const url = window.location.href;
    setPatientId(url.substring(url.lastIndexOf('e') + 2).replaceAll('#', ''));
  };

  useEffect(() => {
    setId();
  }, []);

  return (
    <div className="PatientHome">
      <div className="backgroundPatientHome">
        <div className="containerPatientHome">
          <div className="panel pricing-table">
            <div className="pricing-plan">
              <img src={PH1} alt="" className="pricing-img" />
              {/* <h2 className="pricing-header">Personal</h2> */}
              {/* <ul className="pricing-features">
                <li className="pricing-features-item">Custom domains</li>
                <li className="pricing-features-item">
                  Sleeps after 30 mins of inactivity
                </li>
              </ul> */}
              <span style={{ marginTop: '1rem' }} className="pricing-price">
                Find Doctor
              </span>
              <button
                style={{ marginTop: '5rem' }}
                onClick={() => {
                  navigate(`/findDoctor/${patientId}`);
                }}
                className="pricing-button"
              >
                Click here
              </button>
            </div>

            <div className="pricing-plan">
              <img src={PH2} alt="" className="pricing-img" />
              {/* <h2 className="pricing-header">Small team</h2> */}
              {/* <ul className="pricing-features">
                <li className="pricing-features-item">Never sleeps</li>
                <li className="pricing-features-item">
                  Multiple workers for more powerful apps
                </li>
              </ul> */}
              <span className="pricing-price">Book Appointment</span>
              <button
                onClick={() => {
                  navigate(`/bookAppointment/${patientId}`);
                }}
                className="pricing-button is-featured"
              >
                Click here
              </button>
            </div>

            <div className="pricing-plan">
              <img src={PH3} alt="" className="pricing-img" />
              {/* <h2 className="pricing-header">Enterprise</h2> */}
              {/* <ul className="pricing-features">
                <li className="pricing-features-item">Dedicated</li>
                <li className="pricing-features-item">
                  Simple horizontal scalability
                </li>
              </ul> */}
              <span className="pricing-price">Previous Appointment</span>
              <button
                className="pricing-button"
                onClick={() => {
                  patientId && navigate(`/prevAppointment/${patientId}`);
                }}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHome;
