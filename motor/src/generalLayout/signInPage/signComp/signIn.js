import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const SignIn = () => {
  //Sign in contact
  // this use for click to change option in contact
  const [value, setValue] = useState("");

  const handleChangecontact = (event) => {
    setValue(event.target.value);
  };
  //frist-wrap-2-information
  // this use for click to change option in family
  const [family, setFamily] = useState("");

  const handleChangefamily = (event) => {
    setFamily(event.target.value);
  };
  // this use for click to change the option in module
  const [module, setModule] = useState("");

  const handleChangemodule = (event) => {
    setModule(event.target.value);
  };
  //location-infomation
  //this use for click to change the option in country
  const [country, setCountry] = useState("");

  const handleChangecountry = (event) => {
    setCountry(event.target.value);
  };
  //cellphone-information
  //this use for click to change the option in cellphone
  const [phone, setPhone] = useState("");

  const handleChangephone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div id="content">
      <div
        className="ct-bg mv__sign-in-up-bg"
        style={{
          backgroundImage: "url('./img/bg4.jpg')",
        }}
      />
      <Container maxWidth="md" className="sgn-in-card">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          maxWidth="720px"
          bgcolor="#fff"
          borderRadius="5px"
        >
          <div id="signIn-main">
            <h1>MV AGUSTA REGISTRATION</h1>
            <FormControl id="last-information">
              <TextField
                label="E-MAIL"
                InputLabelProps={{ className: "textField_label" }}
              />
              <div className="wrap-2-infomation">
                <FormControl className="second-wrap-2-information">
                  <TextField
                    label="PASSWORD"
                    InputLabelProps={{ className: "textField_label" }}
                  />
                </FormControl>
                <FormControl className="second-wrap-2-information">
                  <TextField
                    label="CONFIRM PASSWORD"
                    InputLabelProps={{ className: "textField_label" }}
                  />
                </FormControl>
              </div>
            </FormControl>
            <div id="signIn-information">
              <div className="wrap-2-infomation">
                <FormControl className="first-wrap-2-information">
                  <TextField
                    label="NAME"
                    InputLabelProps={{ className: "textField_label" }}
                  />
                </FormControl>
                <FormControl className="first-wrap-2-information">
                  <TextField
                    label="LAST NAME"
                    InputLabelProps={{ className: "textField_label" }}
                  />
                </FormControl>
              </div>
              <div id="location-infomation">
                <FormControl id="location">
                  <Select
                    value={country}
                    onChange={handleChangecountry}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="" disabled>
                      SELECT YOUR COUNTRY
                    </MenuItem>
                    <MenuItem value={"United Stated"}>United Stated</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div id="wrap-contact">
                <div id="cellphone-information">
                  <FormControl id="cellphone">
                    <Select
                      value={phone}
                      onChange={handleChangephone}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="" disabled>
                        +1
                      </MenuItem>
                      <MenuItem value={"+1"}>+1</MenuItem>
                      <MenuItem value={"+84"}>+84</MenuItem>
                      <MenuItem value={"+27"}>+27</MenuItem>
                      <MenuItem value={"+20"}>+20</MenuItem>
                      <MenuItem value={"+30"}>+30</MenuItem>
                      <MenuItem value={"+31"}>+31</MenuItem>
                      <MenuItem value={"+32"}>+32</MenuItem>
                      <MenuItem value={"+33"}>+33</MenuItem>
                      <MenuItem value={"+29"}>+29</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <TextField
                      label="PHONE NUMBER"
                      InputLabelProps={{ className: "textField_label" }}
                    />
                  </FormControl>
                </div>
                <FormControl>
                  <TextField
                    label="EMAIL*"
                    InputLabelProps={{ className: "textField_label" }}
                  />
                </FormControl>
              </div>
            </div>
            <div id="signIn-after">
              <h5>Consent for the processing of personal data</h5>
              <div id="first-checkbox-signIn">
                <p>Before proceeding, please read our privacy policy.</p>
                <p>
                  I have read and understood the privacy notice and I accept all
                  rules belows:
                </p>
                <div className="checkbox-1">
                  <Checkbox
                    defaultChecked
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                    className="checkbox"
                  />
                  <p>
                    For marketing activities via email (newsletters), telephone,
                    text and multimedia messages, chats, banners on our websites
                    and apps, instant messaging, social networks, and
                    conventional mail
                  </p>
                </div>
                <div className="checkbox-1">
                  <Checkbox
                    defaultChecked
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                    className="checkbox"
                  />
                  <p>
                    To understand your preferences through automated individual
                    decision-making activities and better serve you
                  </p>
                </div>
              </div>
            </div>
            <div class="about-us-button-container">
              <button>
                <a href>SIGN UP</a>
              </button>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
