import React, { Component } from 'react';
import history from './history';

import '../styles/companyDetails.css';
import UploadIcon from '../images/uploadIcon.png';
import TickImage from '../images/tickImage.png';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyName: '',
      EmailID: '',
      JobTitle: '',
      YearsExp: '',
      isChecked: false,
      validateSendOTP: false,
    }
    this.handleSendOTP = this.handleSendOTP.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCompanyName(value) {
    this.setState({
      CompanyName: value
    })
  }

  handleEmailID(value) {
    this.setState({
      EmailID: value
    })
  }

  handleJobTitle(value) {
    this.setState({
      JobTitle: value
    })
  }

  handleYearsExp(value) {
    this.setState({
      YearsExp: value
    })
  }

  handleCheckbox() {
    this.setState({
      isChecked: true
    });
  }

  handleBack() {
    history.goBack();
  }

  handleSendOTP() {
    if(this.state.CompanyName === '')
    {
      alert("Please Enter Your Company Name")
    }
    else if(this.state.EmailID === '')
    {
      alert("Please Enter Your Email ID")
    }
    else if(this.state.JobTitle === '')
    {
      alert("Please Enter Your Job Title")
    }
    else if(this.state.YearsExp === '')
    {
      alert("Please Enter Your Years of Experience")
    }
    else {
      history.push('/EmailVerifications')
    }
  }

  render() {
      return (
        <div className="form-details-wrapper">
          <div className="form-details-container">
            <div className="form-details-headers">
              <div className="form-personal-details">
                <img src={TickImage} alt="" style={{width: 20, height: 20}}/>
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
            <div className="company-details-wrapper">
              <label className="company-details-heading">Add your company details</label>
              <label className="company-details-sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                <div className="company-details-logo">
                    <img className="company-details-logo-icon" src={UploadIcon} alt=""/>
                    <label className="logo-label">Upload your company logo</label>
                </div>
                <div className="company-details-company-name">
                    <label className="company-name-label">Company Name</label>
                    <input className="company-name-input"
                    type="input"
                    value={this.state.CompanyName}
                    onChange={() => this.handleCompanyName()}
                    />
                </div>
                <div className="company-details-email-id">
                  <label className="email-id-label">Email id</label>
                  <input className="email-id-input"
                  type="input"
                  value={this.state.EmailID}
                  onChange={() => this.handleEmailID()}
                  />
                </div>
                <div className="company-details-job-title">
                  <label className="job-title-label">Job Title</label>
                  <input className="job-title-input"
                  type="input"
                  value={this.state.JobTitle}
                  onChange={() => this.handleJobTitle()}
                  />
                </div>
                <div className="company-details-years-experience">
                  <label className="years-experience-label">Years of Experience</label>
                  <input className="years-experience-input"
                  type="input"
                  value={this.state.YearsExp}
                  onChange={() => this.handleYearsExp()}
                  />
                </div>
                <div className="company-details-conditions">
                    <input type="checkbox"
                    className="conditions-checkbox"
                    onChange={() => this.handleCheckbox()}
                    />
                    <label className="conditions-label">I accept the </label>
                    <label className="terms-conditions-label">Terms and Conditions</label>
                </div>
                <div className="company-details-buttons">
                    <div className="company-details-back-button">
                        <button className="back-button" onClick={this.handleBack}>Back</button>
                    </div>
                    <div className="company-details-otp-button">
                      {this.state.CompanyName !== '' && 
                      this.state.EmailID !== '' && 
                      this.state.JobTitle !== '' && 
                      this.state.YearsExp !== '' &&
                      this.state.isChecked === true ?
                      <button className="otp-button-validate" onClick={this.handleSendOTP}>Send OTP</button>
                      :
                      <button className="otp-button">Send OTP</button>
                      }
                    </div>
                </div>
              </div>
            </div>
        </div>
      )
    }
}

export default PersonalDetails;