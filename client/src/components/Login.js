import React, {useState } from "react";
import axios from 'axios';


export default function Login() {
  const [values, setValues] = useState({
    eventname: '',
    picture: '',
    qrcodes: '',
    email: ''
  });

  const handleChange = (event) =>{
    setValues({...values, [event.target.name]:[event.target.value]})
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/graduation',values)
    .then(res => console.log("Registered Successfully !! "))
    .catch(err => console.log(err));
  }
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');

  const handleFromTimeChange = (event) => {
    const value = event.target.value;
    setFromTime(value);
  };

  const handleToTimeChange = (event) => {
    const value = event.target.value;
    setToTime(value);
  };
  return (
    <center>
      <div class="container">
    <div className="Auth-wrapper">
      <div className="Auth-inner">
      
        <form onSubmit={handleSubmit}>
        {/* <div className='background__content'> */}
        <div className="X" style={{ fontSize:"60px" ,
        backgroundColor:"beige",
        position:"relative",
        top:"-16px"}}>
          </div>
          <div className="form-input">
            <label>Event name</label>
            <input
              type="text"
              name='eventname'
              className="form-control1"
              placeholder="Enter Event name"
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label>NUMBER of QR codes</label> 
            <input
              type="number"
              name='qrcodes'
              className="form-control1" 
              placeholder="Select NUMBER of QR codes" 
              onChange={handleChange}
            />
          </div>
          
          <div className="form-input">
            <label>Price of Ticket per person (L.E) </label> 
            <input
              type="number"
              name='price'
              className="form-control1" 
              placeholder="Put a suitable price" 
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <label>Date of the Event</label>
            <input
              type="date"
              name='date'
              className="form-control1"
              placeholder="Choose a suitable date "
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
             <spam></spam>
            <label htmlFor="fromTimeInput">From:</label>
      <input
        id="fromTimeInput"
        type="time"
        value={fromTime}
        onChange={handleFromTimeChange}
      />
      <br></br>
      <label htmlFor="toTimeInput">To:</label>
      <input
        id="toTimeInput"
        type="time"
        value={toTime}
        onChange={handleToTimeChange}
      />
          </div>

          <div className="form-input">
            <label>Email Address</label> 
            <input
              type="email"
              name='email'
              className="form-control1"
              placeholder="Enter email for contact "
              onChange={handleChange}/>
          </div>
          <br></br>
          <div className="form-input">
          <div className="hero">
          <div className="cards">
            <p> upload event's photo </p>
            <img src="images/photo.jpg" alt=" "></img>
            <input type="file" name='picture' accept="image/jpeg,image/png,image/jpg" id="input-file"
            onChange={handleChange}/>
          </div>
        </div>
          </div>
          <br></br>
            <button type="submit" className="btn btn-primary" 
            style={{ top:"2px",}}>Submit
            </button>
        </form>
        
        <div>
    </div>
      </div>
      </div>
    </div>
    </center>
  );
}