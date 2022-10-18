import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Register.module.css";
import validate from "./validator";
import LoginGoogle from "../loginGoogle/loginGoogle";
import {userRegister } from '../../redux/actions/index'

export default function Login() {

  const dispatch = useDispatch()

  
  const [input, setInput] = useState({
    userName: "",
    email: "",
    pass: "",
    birthday: "",
    phoneNumber: "",
    firstName: "", 
    lastName: "",
    city: "",
    zipCode: "",
    address: "",
    identification: "",
  });

  const [click, setClick] = useState({
    userName: false,
    email: false,
    pass: false,
    birthday: false,
    firstName: false,
    lastName: false,
    city: false,
    phoneNumber: false,
    identification: false,
  });

  const [error, setError] = useState({});

  const handleClick = (e) => {
    if (!click[`${e.target.name}`]) {
      setClick({
        ...click,
        [e.target.name]: !click[`${e.target.name}`],
      });
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,      
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length && input.userName !== "") {
      dispatch(userRegister(input));
      console.log("register");
    } else {
      setClick({
        userName: true,
        email: true,
        pass: true,
        birthday: true,
        firstName: true,
        lastName: true,
        city: true,
        phoneNumber: true,
        identification: true,
      })
    }
  };

  return (
    <div className={s.container}>
      <div className={s.registerFormMainContainer}>
        <div className={s.formContainer}>
          <div className={s.forms}>
            <div className={s.formLogin}>
              <span className={s.title}>Registration</span>
              <form action="#">
                <div className={s.inputField}>
                  <input
                    type="text"
                    placeholder="userName"
                    autoComplete="off"
                    onChange={handleInputChange}
                    spellCheck="off"
                    required
                    name="userName"
                    value={input.userName}
                    onClick={handleClick}
                  />
                  {click.userName && error.userName && (
                    <p className={s.error}>{error.userName}</p>
                  )}
                  <i class="uil uil-user"></i>
                </div>
                <div className={s.inputField}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoCapitalize="off"
                    required
                    value={input.email}
                    onClick={handleClick}
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-envelope icon"></i>
                  {click.email && error.email && (
                    <p className={s.error}>{error.email}</p>
                  )}
                </div>
                <div className={s.inputField}>
                  <input
                    type="pass"
                    name="pass"
                    value={input.pass}
                    placeholder="pass"
                    autoCapitalize="off"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-lock"></i>
                  {click.pass && error.pass && (
                    <p className={s.error}>{error.pass}</p>
                  )}
                </div>
                <div className={s.inputField}>
                  <p id={s.dateOfBirth}>Date of Birth</p>
                  <input
                    type="date"
                    autoComplete="off"
                    onChange={handleInputChange}
                    spellCheck="off"
                    onClick={handleClick}
                    required
                    name="birthday"
                    value={input.birthday}
                  />
                  <i class="uil uil-user"></i>
                  {click.birthday && error.birthday && (
                    <p className={s.error}>{error.birthday}</p>
                  )}
                </div>

                {/* Phone and PIN numbers */}
                <div className={s.line}></div>

                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      name="firstName"
                      value={input.firstName}
                      onClick={handleClick}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-user"></i>
                    {click.firstName && error.firstName && (
                      <p className={s.error}>{error.firstName}</p>
                    )}
                  </div>
                  <div className={s.lastnameContainer}>
                    <input
                      id="lastname"
                      type="text"
                      name="lastName"
                      value={input.lastName}
                      placeholder="Last Name"
                      onClick={handleClick}
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    {click.lastName && error.lastName && (
                      <p className={s.error}>{error.lastName}</p>
                    )}
                  </div>
                </div>


                <div className={s.inputField}>
                  <input
                    type="text"
                    name="identification"
                    value={input.identification}
                    placeholder="Identification"
                    autoCapitalize="off"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-mobile-android" />
                  {click.identification && error.identification && (
                    <p className={s.error}>{error.identification}</p>
                  )}
                </div>

                <div className={s.inputField}>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={input.phoneNumber}
                    placeholder="Phone Number"
                    autoCapitalize="off"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-mobile-android" />
                  {click.phoneNumber && error.phoneNumber && (
                    <p className={s.error}>{error.phoneNumber}</p>
                  )}
                </div>
                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      name="city"
                      onClick={handleClick}
                      value={input.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-map "></i>
                    {click.city && error.city && (
                    <p className={s.error}>{error.city}</p>
                  )}
                  </div>
                  <div className={s.lastnameContainer}>
                  <p id={s.dateOfBirth}>Optional</p>
                    <input
                      id="lastname"
                      type="text"
                      name="zipCode"
                      value={input.zipCode}
                      onClick={handleClick}
                      placeholder="Zip Code"
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    {click.zipCode && error.zipCode && (
                      <p className={s.error}>{error.zipCode}</p>
                    )}
                  </div>
                </div>

                <div className={s.inputField}>
                <p id={s.dateOfBirth}>Optional</p>
                  <input
                    type="text"
                    name="address"
                    value={input.address}
                    onClick={handleClick}
                    placeholder="Address"
                    autoCapitalize="off"
                    onChange={handleInputChange}
                    required
                  />
                  <i className="uil uil-map-marker"></i>
                  {click.address && error.address && (
                    <p className={s.error}>{error.address}</p>
                  )}
                </div>
                {/* Button */}

                <div className={s.loginButton}>
                <button onClick={handleSubmit}>Create Account</button>
                </div>
                {/* <div className={s.googleBtn}>
                  <p id={s.googleOr}>Sign in With Google</p>
                  <LoginGoogle />
                </div> */}
              </form>
              <div className={s.loginSignup}>
                <span className="text">
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
