const Register = () => {
  return (
    <div className="register">
      <h2 className="register_title">Register Form</h2>
      <form className="register_form">
        <div className="register_form_wrapperName">
          <input
            type="text"
            id="firstname"
            className="form_fname"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastname"
            className="form_lname"
            placeholder="Last Name"
          />
        </div>
        <br />
        <input type="email" className="form_email" placeholder="Email" /> <br />
        <input
          type="password"
          className="form_password"
          placeholder="Password"
        />
        <br />
        <input
          type="password"
          className="form_password"
          placeholder="Retype Password"
        />
        <br />
        <input type="date" className="form_dob" placeholder="Date of birth" />
        <br />
        <div className="register_form_wrapperAddress">
          <input
            type="text"
            className="form_street"
            placeholder="Street Name"
          />
          <input type="text" className="form_apt" placeholder="Apartment #" />
        </div>
        <div className="register_form_wrapperAddressExtend">
          <input type="text" className="form_city" placeholder="City" />
          <input type="text" className="form_stat" placeholder="Stat" />
          <input
            type="text"
            className="form_zipcode"
            placeholder="Zip Code #"
          />
        </div>
        <div className="form_checkmark">
          <div className="form_checkmark_icon"></div>
          <p className="form_checkmark_text">
            I agreed to all terms and services.
          </p>
        </div>
        <input type="submit" className="form_submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default Register;
