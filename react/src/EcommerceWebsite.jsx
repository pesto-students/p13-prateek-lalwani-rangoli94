import React from 'react'
import { Link } from 'react-router-dom'

function EcommerceWebsite() {
  return (
    <div>
      <Link to='/project'><h5>Back</h5></Link>
      <h3>E-commerce Website</h3>
          <div>Role played : React developer</div>
          <div>Skills used : React, HTML 5, Java Script, CSS</div>
          <div>
            <span>Project Description : </span>
            <ul>
              <li>
                Developing Checkout Functionality for an Online shopping application.
              </li>
              <li>
              Working as a frontend developer on this application development.
              </li>
            </ul>
          </div>
    </div>
  )
}

export default EcommerceWebsite