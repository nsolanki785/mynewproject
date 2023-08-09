import logo from './logo.svg';
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import './App.css';
import CustomizedSteppers from './component/stepper';
import '././style.css'
import DateScrollPicker from './component/DatePicker';

function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div className='container p-3'>
        <CustomizedSteppers
          activeTab={activeTab}
        />
        {activeTab == 0 &&
          <div className='m-3'>
            <div className='row '>
              <div className='col-md-6 '>
              <h3>Select date of service</h3>
                <div style={{
                  color: "lightgray",
                  fontSize: "14px"
                }}>
                  Service Will take approx 30 mins.
                </div>
                <DateScrollPicker />
              </div>
              <div className='col-md-6'>
              <h3>Time to start the service </h3>
                <div style={{
                  color: "lightgray",
                  fontSize: "14px"
                }}>
                  Select the best hour for you
                </div>
                <DateScrollPicker />
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button className='back-btn btn-m'>Cancel</button>
              <button onClick={() => setActiveTab(activeTab + 1)} className='next-btn btn btn-primary'>Continue</button>
            </div>
          </div>

        }
        {activeTab == 1 &&
          <div className='row m-3 ' >
            <div className='col-md-6 '>
              <div>
                <h3>Personal Details</h3>
                <div style={{
                  color: "lightgray",
                  fontSize: "14px"
                }}>
                  Name and contact email
                </div>
                <div>
                  <div className='row mt-3' ><input type='text ' className='input-field' placeholder='First Name' /></div>
                  <div className='row mt-3' ><input type='text' className='input-field' placeholder='Last Name' /></div>
                  <div className='row mt-3'><input type='text' className='input-field' placeholder='Work Email' /></div>
                </div>
                <div className='mt-3  d-flex justify-content-end'>
                  <button onClick={() => setActiveTab(activeTab - 1)} className='back-btn'>Back</button>
                  <button onClick={() => setActiveTab(3)} className='next-btn btn btn-primary'>Next</button>
                </div>
                <div>

                </div>
              </div>
            </div>
            <div className='col-md-6 ml-2'>
              <div>
                <h3>Billing Address</h3>
                <div style={{
                  color: "lightgray",
                  fontSize: "14px"
                }}>
                  Addess and Location
                </div>
                <div>
                  <div className='row mt-3 ml-2' ><input type='text' className='input-field' placeholder='Billing Address Line 1' /></div>
                  <div className='row mt-3 ml-2' ><input type='text' className='input-field' placeholder='Billing Address Line 2' /></div>
                  <div className='row mt-3 ml-2'>
                    <div className='col'><input type='text' className='input-field-col' placeholder='Town' />
                    </div>
                    <div className='col'><input type='text' className='input-field-col' placeholder='Postcode' />
                    </div>
                  </div>
                </div>
                <div className='mt-3 d-flex justify-content-start'>
                  <div style={{
                    color: "#056b9f",
                    fontSize: "15px",

                  }}>
                    <span class="dot"></span>
                    Terms and Conditions
                  </div>
                </div>
                <div>

                </div>
              </div>
            </div>
            {/* Second Step
        <button onClick={()=> setActiveTab(2)}>Next</button> */}
          </div>
        }

        {activeTab == 2 &&
          <div>
            Third Step
            <button onClick={() => setActiveTab(0)}>Next</button>
          </div>
        }
      </div>

    </>
  );
}

export default App;

