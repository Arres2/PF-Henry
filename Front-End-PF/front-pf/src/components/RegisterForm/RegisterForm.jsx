import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Register.module.css";
import validate from "./validator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/index";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const dispatch = useDispatch()
  const currentUser = useSelector((state)=>state.currentUser)
  const {getAccessTokenSilently}=useAuth0()
  const redirect = useNavigate(()=>window.location.origin)

  const [input, setInput] = useState({

    date_of_birth: "",
    phone_number: "",
    city: "",
    zip_code: "",
    address: "",
    passport:""
  });

  const [click, setClick] = useState({
    date_of_birth: false,
    phone_number: false,
    city: false,
    zip_code: false,
    address: false,
    passport:false
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length) {
      dispatch(updateUser(getAccessTokenSilently,{...input, id: currentUser.id}));
      alert("Usuario actualizado exitosamente")
      redirect()
    } else {
      setClick({
        date_of_birth: true,
        phone_number: true,
        city: true,
        zip_code: true,
        address: true,
        passport:true
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
                  <p id={s.dateOfBirth}>Date of Birth</p>
                  <input
                    type="date"
                    autoComplete="off"
                    onChange={handleInputChange}
                    spellCheck="off"
                    onClick={handleClick}
                    required
                    name="date_of_birth"
                    value={input.date_of_birth}
                  />
                  <i class="uil uil-user"></i>
                  {click.date_of_birth && error.date_of_birth && (
                    <p className={s.error}>{error.date_of_birth}</p>
                  )}
                </div>
                <div className={s.inputField}>
                  <input
                    type="text"
                    name="passport"
                    value={input.passport}
                    placeholder="Passport Number"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-mobile-android" />
                  {click.passport && error.passport && (
                    <p className={s.error}>{error.passport}</p>
                  )}
                </div>

                {/* Phone and PIN numbers */}
              
                <div className={s.inputField}>
                  <input
                    type="text"
                    name="phone_number"
                    value={input.phone_number}
                    placeholder="Phone Number"
                    autoCapitalize="off"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-mobile-android" />
                  {click.phone_number && error.phone_number && (
                    <p className={s.error}>{error.phone_number}</p>
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
                  
                    <input
                      id="lastname"
                      type="text"
                      name="zip_code"
                      value={input.zip_code}
                      onClick={handleClick}
                      placeholder="Zip Code"
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    {click.zip_code && error.zip_code && (
                      <p className={s.error}>{error.zip_code}</p>
                    )}
                  </div>
                </div>

                <div className={s.inputField}>
                
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
                  <i class="uil uil-map-marker"></i>
                  {click.address && error.address && (
                    <p className={s.error}>{error.address}</p>
                  )}
                </div>
                {/* Button */}

                <div className={s.loginButton}>
                <button onClick={handleSubmit}>Create Account</button>
                </div>
              
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
