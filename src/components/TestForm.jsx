import React from 'react'
import { useRef } from 'react';

const TestForm = () => {

  const firstName = useRef(54);
  console.log(firstName.current);

  const submitHandler = (event) => {
    console.log(event);
    event.preventDefault();
  }

  return (
    <div>
      <form action="/submit-data" onSubmit={submitHandler}>
        <input type="text" ref={firstName} placeholder='First Name' name='firstName'/><br />
        <input type="text" placeholder='Last Name' name='LastName'/><br />
        <label htmlFor="dob">DOB</label>
        <input id="dob" type="date" name='dob'/><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default TestForm