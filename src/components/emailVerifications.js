import React, { Component } from 'react';
import history from './history';

import '../styles/emailVerifications.css';
import TickImage from '../images/tickImage.png';

class EmailVerifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OtpInp1: '',
      OtpInp2: '',
      OtpInp3: '',
      OtpInp4: '',
      OtpInp5: '',
      enabledVerified: false,
    }
    this.handleVerify = this.handleVerify.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleOtpInp1(value) {
    this.setState({
      OtpInp1: value
    })
  }

  handleOtpInp2(value) {
    this.setState({
      OtpInp2: value
    })
  }

  handleOtpInp3(value) {
    this.setState({
      OtpInp3: value
    })
  }

  handleOtpInp4(value) {
    this.setState({
      OtpInp4: value
    })
  }

  handleOtpInp5(value) {
    this.setState({
      OtpInp5: value
    })
  }

  handleBack() {
    history.goBack();
  }

  handleVerify() {
    if(this.state.OtpInp1 === '')
    {
      alert("Please Enter Your OTP")
    }
    else if(this.state.OtpInp2 === '')
    {
      alert("Please Enter Your Validate OTP")
    }
    else if(this.state.OtpInp3 === '')
    {
      alert("Please Enter Your Validate OTP")
    }
    else if(this.state.OtpInp4 === '')
    {
      alert("Please Enter Your Validate OTP")
    }
    else if(this.state.OtpInp5 === '')
    {
      alert("Please Enter Your Validate OTP")
    }
    else {
      alert("Verified");
      this.setState({
        enabledVerified: true,
      })

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
              <img src={TickImage} alt="" style={{width: 20, height: 20}}/>
              <label className="header-personal-details">Company Details</label>
            </div>
            {this.state.enabledVerified ? 
              <div className="form-Email-details">
                
                <img src={TickImage} alt="" style={{width: 20, height: 20}}/>
                <label className="header-personal-details">Email Verification</label>
            </div>
            : 
            <div className="form-Email-details">
              <button className="header-button">3</button>
              <label className="header-personal-details">Email Verification</label>
            </div>
            }
          </div>
          <div className="email-veriifications-wrapper">
            <label className="email-veriifications-heading">Enter your OTP</label>
            <div className="email-verification-sub-headings">
              <label className="sub-heading1">For your security,we need to verify your identity.We sent a 5-digit code </label>
              <div className="sub-headings-row2">
                  <label className="sub-heading2">code to</label>
                  <label className="sub-heading3">name@domain.com</label>
                  <label className="sub-heading4">Please enter it below.</label>
              </div>
            </div>
            <div className="email-verifications-enter-code">
                <div className="enter-code-details">
                    <div className="enter-code-view"> 
                        <label className="enter-code-label">Enter your code</label>
                        <div className="enter-code-otp-input">
                            <div className="otp-input1">
                              <input className="otp-input"
                              value={this.state.OtpInp1}
                              onChange={() => this.handleOtpInp1()}
                              />
                            </div>
                            <div className="otp-input2">
                              <input className="otp-input"
                              value={this.state.OtpInp2}
                              onChange={() => this.handleOtpInp2()}
                              />
                            </div>
                            <div className="otp-input2">
                              <input className="otp-input"
                              value={this.state.OtpInp3}
                              onChange={() => this.handleOtpInp3()}
                              />
                            </div>
                            <div className="otp-input2">
                              <input className="otp-input"
                              value={this.state.OtpInp4}
                              onChange={() => this.handleOtpInp4()}
                              />
                            </div>
                            <div className="otp-input2">
                              <input className="otp-input"
                              value={this.state.OtpInp5}
                              onChange={() => this.handleOtpInp5()}
                              />
                            </div>
                        </div>
                        <div className="email-verifications-buttons">
                          <div className="email-verifications-back-button">
                              <button className="back-button" onClick={this.handleBack}>Back</button>
                          </div>
                          <div className="email-verifications-verify-button">
                            {this.state.OtpInp1 !== '' &&
                            this.state.OtpInp2 !== '' &&
                            this.state.OtpInp3 !== '' &&
                            this.state.OtpInp4 !== '' &&
                            this.state.OtpInp5 !== '' ?
                            <button className="verify-button-validate" onClick={this.handleVerify}>Verify</button>
                            :                   
                            <button className="verify-button" disabled>Verify</button>
                            }      
                          </div>
                        </div>
                    </div>
                    <div className="email-verifications-border"/>
                    <div className="email-verifications-didnt-receive">
                        <label className="didnt-receive-label-row1">Didn't receive the email? Check your spam filter for an email</label>
                        <div className="didnt-receive-label-row2">
                          <label className="row2-label-from">from</label>
                          <label className="row2-label-mail">name@domain.com</label>
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

export default EmailVerifications;