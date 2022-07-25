import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import './BookAppointment.css';

const BookAppointment = () => {
  const [doctorList, setDoctorList] = useState();
  const [deptList, setDeptList] = useState();

  const getDepartment = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/general/getDepartments`
      );
      setDeptList(res.data.department);
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(deptList);

  useEffect(() => {
    getDepartment();
  }, []);

  return (
    <div className="BookAppointment">
      <div className="getList">
        <div className="patientForm">
          <form>
            {/* <div className="input-container">
              <label>Deparment </label>
              <input type="text" name="uname" required />
            </div> */}

            <div style={{ width: '18rem', marginLeft: '35%', marginTop: '6%' }}>
              <Select options={deptList} />
            </div>
            <div style={{ width: '18rem', marginLeft: '35%', marginTop: '6%' }}>
              <Select />
            </div>
            <button style={{ marginTop: '3rem' }}>Submit</button>
          </form>
        </div>
        <div className="containerBookAppointment">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Doctor Id</div>
              <div className="col col-2">Doctor Name</div>
              <div className="col col-3">Appointment Date</div>
              <div className="col col-4">Select</div>
            </li>
            {doctorList &&
              doctorList.map((doctor) => (
                <li className="table-row" key={doctor.id}>
                  <div className="col col-1" data-label="Doctor Id">
                    {/* {doctor.id} */}
                  </div>
                  <div className="col col-2" data-label="Doctor Name">
                    {/* {doctor.name} */}
                  </div>
                  <div className="col col-3" data-label="Doctor Age">
                    {/* {doctor.age} */}
                  </div>
                  <div className="col col-4" data-label="Doctor Mobile">
                    {/* {doctor.mobile} */}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
