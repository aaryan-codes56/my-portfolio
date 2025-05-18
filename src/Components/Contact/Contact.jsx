import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

  const onClick = () => {
    const form = document.querySelector("form");
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    if (name === "" || email === "" || message === "") {
      alert("Please fill all the fields");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (message.length < 10) {
      alert("Message should be at least 10 characters long");
      return;
    }
    alert("Email sent successfully");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f3c1279d-79ff-48b7-850a-e8b01422ecb9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>aaryankrishna009@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Delhi, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button onClick={onClick} type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact