import React from "react";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
    
  }; 

  console.log(watch("example")); 
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Logo">
        <img src="Logo.png" alt="BUE Logo"/>
      </div>

      <div className="form-group">
        <label>First Name</label>
        <input
          name="firstName"
          ref={register({
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        {_.get("firstName.type", errors) === "required" && (
          <p>This field is required</p>
        )}
        {_.get("firstName.type", errors) === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {_.get("firstName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
      </div>
    
      <div className="form-group">
        <label>Laste Name</label>
        <input name="lastName" ref={register({ required: true,pattern: /^[A-Za-z]+$/i })} />
        {_.get("lastName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        {_.get("lastName.type", errors) === "required" && (
          <p>This field is required</p>
        )}
      </div>



      <div className="form-group">
        <label>Age</label>
        <input name="Age" type="number" ref={register({ required: true,min: 18, max: 99})} />
        {errors.age && (
          <p>You Must be older then 18 and younger then 99 years old</p>
        )}
       
      </div>

      <div className="form-group" >
         <label>Gender Selection</label>
          <select name="Gender" ref={register({ required: true})}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {_.get("email.type", errors) === "required" && (
          <p>please select gender !</p>
          )}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input name="Email" ref={register({ required: true,pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />
        {_.get("email.type", errors) === "pattern" && (
          <p>please enter vaild email !</p>
        )}
          {_.get("email.type", errors) === "required" && (
          <p> email is required !</p>
        )}
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input type="number" name="phone" ref={register({ required: true , pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g })} />

          {_.get("phone.type", errors) === "required" && (
          <p> phone is required !</p>
        )}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" ref={register({ required: true , pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm })} />

          {_.get("password.type", errors) === "required" && (
          <p> Password is required !</p>
        )}

        {_.get("password.type", errors) === "pattern" && (
          <p>please enter valid format !</p>
        )}
      </div>

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
