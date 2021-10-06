import React, { Component } from 'react';
import history from './history';

import '../styles/personalDetails.css';
import Indianflag from '../images/indianFlag.png';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setGenderMale: false,
      setGenderFemale: false,
      setGenderOther: false,
      fullName: '',
      phone: '',
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleGenderMale = this.handleGenderMale.bind(this);
    this.handleGenderFemale = this.handleGenderFemale.bind(this);
    this.handleGenderOther = this.handleGenderOther.bind(this);
  }

  handleFullName(value) {
    this.setState({
      fullName: value,
    })
  }

  handlePhoneNo(value) {
    this.setState({
      phone: value,
    })
  }

  handleNext() {
    if(this.state.fullName === '')
    {
      alert("Please Enter Your Full Name")
    }
    else if(this.state.phone === '')
    {
      alert("Please Enter Your Phone")
    }
    else {
      history.push('/CompanyDetails')
    }
  }

  handleGenderMale() {
    this.setState({
      setGenderMale: true
    })
  }

  handleGenderFemale() {
    this.setState({
      setGenderFemale: true
    })
  }

  handleGenderOther() {
    this.setState({
      setGenderOther: true
    })
  }

  render() {
      return (
        <div className="form-details-wrapper">
          <div className="form-details-container">
            <div className="form-details-headers">
              <div className="form-personal-details">
                <button className="header-button">1</button>
                <label className="header-personal-details">Personal Details</label>
              </div>
              <div className="form-company-details">
                <button className="header-button">2</button>
                <label className="header-personal-details">Company Details</label>
              </div>
              <div className="form-Email-details">
                <button className="header-button">3</button>
                <label className="header-personal-details">Email Verification</label>
              </div>
            </div>
            <div className="form-details-components">
              <div className="personal-details-wrapper">
              <label className="personal-details-heading">Add your personal details</label>
              <label className="personal-details-sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
              <div className="personal-details-name">
                <label className="name-label">Full Name</label>
                <input className="name-input" 
                value={this.state.fullName} 
                type="input"
                onChange={() => this.handleFullName()}
                />
              </div>
              <div className="personal-details-gender">
                <label className="gender-label">Gender</label>
                <div className="personal-details-gender-label">
                {this.state.setGenderMale &&
                this.state.setGenderFemale === false &&
                this.state.setGenderOther === false ?
                <div className="personal-details-gender-male-focus">
                  <label className="male-label-focus" onClick={this.handleGenderMale}>Male</label>
                </div>
                :
                <div className="personal-details-gender-male">
                  <label className="male-label" onClick={this.handleGenderMale}>Male</label>
                </div>
                }
                {this.state.setGenderFemale &&
                this.state.setGenderMale === false &&
                this.state.setGenderOther === false ? 
                  <div className="personal-details-gender-female-focus">
                  <label className="female-label-focus" onClick={this.handleGenderFemale}>Female</label>
                  </div>
                  :
                  <div className="personal-details-gender-female">
                    <label className="female-label" onClick={this.handleGenderFemale}>Female</label>
                  </div>
                }
                {this.state.setGenderOther &&
                this.state.setGenderFemale === false &&
                this.state.setGenderMale === false ?
                <div className="personal-details-gender-other-focus">
                  <label className="other-label-focus" onClick={this.handleGenderOther}>Other</label>
                </div>
                :
                <div className="personal-details-gender-other">
                  <label className="other-label" onClick={this.handleGenderOther}>Other</label>
                </div>
                }
                </div>
                <div className="personal-details-country">
                  <label className="country-label">Country</label>
                  <div className="personal-details-country-select">
                    <img className="phone-number-flagicon" src={Indianflag} alt=""/>
                    <select className="country-select">
                      <option className="country-select-option">India</option>
                      <option className="country-select-option">Australia</option>
                      <option className="country-select-option">Albania</option>
                    </select>
                  </div>
                </div>
                <div className="personal-details-state">
                  <label className="state-label">State</label>
                  <select className="state-select">
                    <option className="state-select-option">Tamil Nadu</option>
                    <option className="state-select-option">Gujarat</option>
                    <option className="state-select-option">Kerala</option>
                  </select>
                </div>
                <div className="personal-details-phone">
                  <label className="phone-label">Phone</label>
                  <div className="phone-number">
                    <img className="phone-number-flagicon" src={Indianflag} alt=""/>
                    <select className="phone-number-code">
                      <option>+91</option>
                    </select>
                    <input className="phone-number-input"
                    value={this.state.phone}
                    onChange={() => this.handlePhoneNo()}
                    />
                  </div>
                  <div className="personal-details-button">
                    {this.state.fullName !== '' && this.state.phone !== '' ?
                    <button className="next-button-enabled" onClick={this.handleNext}>Next</button>
                    :
                    <button className="next-button" disabled>Next</button>
                    }
                  </div>
                  <div className="personal-details-account">
                    <label className="account-label">Already have an account?</label>
                    <label className="login-label">Log in</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalDetails;