import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import DoctorRoute from '../../../Api/DoctorRoute';
import AppointmentModal from './Modal/AppointmentModal';
import './FindDoctor.css';
import GeneralRoute from '../../../Api/GeneralRoute';

var symList = {},
  symptoms = {},
  deptList = {},
  doctorList = {};

const FindDoctor = () => {
  const [deptId, setDeptId] = useState();
  const [list, setList] = useState();
  const [docOptions, setDocOptions] = useState();

  const getSymptoms = async () => {
    try {
      const res = await GeneralRoute.get(`/getSymptoms`);
      symList = res.data.symptoms;

      const li = [];
      const dummy = res.data.symptoms;
      for (var i = 0; i < dummy.length; i++) {
        var sym = dummy[i].symptoms;
        li.push(sym);
      }
      symptoms = li;
    } catch (err) {
      console.log(err.message);
    }

    const lis = [];
    for (var i = 0; symptoms && i < symptoms.length; i++) {
      var obj = symptoms[i];
      for (var j = 0; j < obj.length; j++) {
        lis.push({ label: obj[j], value: obj[j] });
      }
    }
    setList(lis);
  };

  const getDepartment = async () => {
    try {
      const res = await GeneralRoute.get(`/getDepartments`);
      deptList = res.data.department;
      console.log(deptList);
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

  const handleChange = (arr) => {
    console.log(deptList, arr);
    if (arr.length == 0) {
      setDocOptions([]);
    }

    const li = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < symList.length; j++) {
        var symArr = symList[j].symptoms;
        var flag = false;
        for (let k = 0; k < symArr.length; k++) {
          flag = symArr[k] === arr[i].value ? true : flag;
        }
        if (flag) {
          li.push(symList[j].department_id);
        }
      }
    }

    const dummy = [];
    const values = [];
    for (let i = 0; i < li.length; i++) {
      for (let j = 0; j < deptList.length; j++) {
        if (li[i] === deptList[j].id && !values.includes(deptList[j].name)) {
          dummy.push({ label: deptList[j].name });
          values.push(deptList[j].name);
        }
      }
    }
    setDeptId(dummy);
  };

  const handleChangeDepartment = (arr) => {
    const idArr = [];

    for (let j = 0; j < deptList.length; j++) {
      if (deptList[j].name == arr.label) idArr.push(deptList[j].id);
    }

    const doc = [];
    for (let i = 0; i < idArr.length; i++) {
      for (let j = 0; j < doctorList.length; j++) {
        if (doctorList[j].department_id === idArr[i]) {
          doc.push(doctorList[j]);
        }
      }
    }
    setDocOptions(doc);
  };

  useEffect(() => {
    getSymptoms();
    getDepartment();
    getDoctors();
    console.log(symptoms);
  }, [window.location.href]);

  return (
    <div className="FindDoctor">
      <div className="getList">
        <div className="patientForm">
          <form>
            {/* <div className="input-container">
              <label>Deparment </label>
              <input type="text" name="uname" required />
            </div> */}
            <h3>Symptoms</h3>
            <div
              style={{
                width: '18rem',
                marginLeft: '35%',
                marginTop: '3%',
                marginBottom: '4%',
              }}
            >
              <Select onChange={handleChange} options={list} isMulti={true} />
            </div>
            <h3>Department</h3>
            <div style={{ width: '18rem', marginLeft: '35%', marginTop: '3%' }}>
              <Select onChange={handleChangeDepartment} options={deptId} />
            </div>
          </form>
        </div>
        <div className="containerFindDoctor">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Doctor Id</div>
              <div className="col col-2">Name</div>
              <div className="col col-3">Age</div>
              <div className="col col-4">Mobile</div>
              <div className="col col-5">Availability</div>
            </li>
            {docOptions &&
              docOptions.map((doctor) => (
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
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
