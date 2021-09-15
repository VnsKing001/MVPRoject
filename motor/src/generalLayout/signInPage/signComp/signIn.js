import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const SignIn = () => {

    //Sign in contact
    // this use for click to change option in contact
    const [value, setValue] = useState('');

    const handleChangecontact = (event) => {
        setValue(event.target.value);
    };
    //frist-wrap-2-information
    // this use for click to change option in family
    const [family, setFamily] = useState('');

    const handleChangefamily = (event) => {
        setFamily(event.target.value)
    }
    // this use for click to change the option in module
    const [module, setModule] = useState('');

    const handleChangemodule = (event) => {
        setModule(event.target.value);
    }
    //location-infomation
    //this use for click to change the option in country
    const [country, setCountry] = useState('');

    const handleChangecountry = (event) => {
        setCountry(event.target.value);
    }
    //cellphone-information
    //this use for click to change the option in cellphone
    const [phone, setPhone] = useState('');

    const handleChangephone = (event) => {
        setPhone(event.target.value);
    }

    return (
        <div id="signIn-main">
            <div id="signIn-logo">
                <img src="./SignImg/mv-agusta-logo.png" />
            </div>
            <h1>Contact by dealer</h1>
            <div id="signIn-contact">
                <FormControl id="contact">
                    <Select
                        value={value}
                        onChange={handleChangecontact}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            CONTACT A DEALER FOR:
                        </MenuItem>
                        <MenuItem value={'Information about a model'}>Information about a model</MenuItem>
                        <MenuItem value={'Inforation about accessories'}>Inforation about accessories</MenuItem>
                        <MenuItem value={'Information about apparel'}>Information about apparel</MenuItem>
                        <MenuItem value={'Request a quote'}>Request a quote</MenuItem>
                        <MenuItem value={'Information about financing'}>Information about financing</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>

                    </Select>
                    <FormHelperText>*Require field</FormHelperText>
                </FormControl>
            </div>
            <div id="signIn-information">
                <p>Select the model you are interested in</p>
                <div className="wrap-2-infomation">
                    <FormControl className="first-wrap-2-information">
                        <Select
                            value={family}
                            onChange={handleChangefamily}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                FAMILY*
                            </MenuItem>
                            <MenuItem value={'XDiavel'}>XDiavel</MenuItem>
                            <MenuItem value={'Supersport'}>Supersport</MenuItem>
                            <MenuItem value={'Streetfighter'}>Streetfighter</MenuItem>
                            <MenuItem value={'Panigale'}>Panigale</MenuItem>
                            <MenuItem value={'Multistrada'}>Multistrada</MenuItem>
                            <MenuItem value={'Monster'}>Monster</MenuItem>
                            <MenuItem value={'Hypermotard'}>Hypermotard</MenuItem>
                            <MenuItem value={'Diavel'}>Diavel</MenuItem>
                            <MenuItem value={'Scrambler'}>Scrambler</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="first-wrap-2-information">
                        <Select
                            value={module}
                            onChange={handleChangemodule}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                MODEL*
                            </MenuItem>
                            <MenuItem value={'Model*'}>Model*</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="second-wrap-2-information" >
                        <TextField label="NAME*" InputLabelProps={{ className: "textField_label" }} />
                    </FormControl>
                    <FormControl className="second-wrap-2-information">
                        <TextField label="LAST NAME*" InputLabelProps={{ className: "textField_label" }} />
                    </FormControl>
                </div>
                <div id="location-infomation">
                    <FormControl id="location">
                        <Select
                            value={country}
                            onChange={handleChangecountry}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                COUNTRY*
                            </MenuItem>
                            <MenuItem value={'United Stated*'}>United Stated*</MenuItem>
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
                                inputProps={{ 'aria-label': 'Without label' }}
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
                        <FormControl >
                            <TextField label="CELL PHONE*" InputLabelProps={{ className: "textField_label" }} />
                        </FormControl>
                    </div>
                    <FormControl>
                        <TextField label="EMAIL*" InputLabelProps={{ className: "textField_label" }} />
                    </FormControl>
                </div>
                <FormControl id="last-information">
                    <TextField label="NAME OF THE LOCATION OR THE DEALER" InputLabelProps={{ className: "textField_label1" }} />
                </FormControl>
            </div>
            <div id="signIn-after">
                <h5>Consent for the processing of personal data</h5>
                <div id="first-checkbox-signIn">
                    <p>Before proceeding, please read our privacy policy.</p>
                    <p>I have read and understood the privacy notice and I hereby consent to the processing of my personal data by Ducati Motor Holding S.p.A.:</p>
                    <div className="checkbox-1">
                        <Checkbox
                            defaultChecked
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            className="checkbox"
                        />
                        <p>For marketing activities via email (newsletters), telephone, text and multimedia messages, chats, banners on our websites and apps, instant messaging, social networks, and conventional mail</p>
                    </div>
                    <div className="checkbox-1">
                        <Checkbox
                            defaultChecked
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            className="checkbox"
                        />
                        <p>To understand your preferences through automated individual decision-making activities and better serve you</p>
                    </div>
                </div>
                <div id="final_button">
                    <div id="button"><p>SEND</p></div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;