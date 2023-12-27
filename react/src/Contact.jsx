import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const isValidEmail = () => {
    if(email.includes("@") && email.includes(".com")) {
      return true
    }
    return false
  }

  const isValidForm = () => {
    if(name.length > 0 && subject.length > 0 && message.length > 0 && isValidEmail()) {
      return true
    } 
    return false
  }

  const submitContactForm = () => {
    if(isValidForm()) {
      setSuccessMessage("Form submitted Successfully")
    } else {
      setSuccessMessage("")
      window.alert("Invalid details")
    }
    
  }

  return (
    <>
      <div className='successMessage'><h2>{successMessage}</h2></div>
      <div className='contact'>
          <h1>CONTACT ME</h1>
          <div className='form'>
            <div>
              <input 
                type="text" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your Name'
                className='inputStyle' />

              <input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                className='inputStyle' />

              <input 
                type="text" 
                name="subject" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                placeholder='Subject'
                className='inputStyle' />

              <textarea 
                name="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                cols={40}
                className='inputStyle'
              />

              <button className='submitButton' onClick={submitContactForm}>Submit</button>
            </div>
            

          </div>
      </div>
    </>
    
  )
}

export default Contact