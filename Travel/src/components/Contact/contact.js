import React, { Component } from "react";
import contact from "../../assets/astronaut.png";
import emailjs from 'emailjs-com';
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      isFormVisible: true
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_1sv9t6b', 'template_jhemkuw', this.form.current, 'ODSTkHwTRAirRD5Je')
      .then((result) => {
          console.log(result.text);
          window.alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          window.alert('Failed to send email. Please try again.');
      });
  };

  render() {
    return this.state.isFormVisible ? (
      <div id="contact" className="contact-container">
         
        <div className="contact-form">
        <div className="title">
            <h2>Contact Us</h2>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} className="for">
            <div className="form-group">
              <label htmlFor="first_name"></label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                id="first_name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name"></label>
              <input
                type="text"
                name="last_name"
                className="form-control"
                id="last_name"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Send" />
            </div>
          </form>
        </div>
        <div className="contact-image">
          <img src={contact} alt="Contact" className="animated-image" />
        </div>
      </div>
    ) : null;
  }
}

export default Contact;
