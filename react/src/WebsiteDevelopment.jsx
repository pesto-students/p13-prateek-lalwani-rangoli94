import React from 'react'
import { Link } from 'react-router-dom'

function WebsiteDevelopment() {
  return (
    <div>
      <Link to='/project'><h5>Back</h5></Link>
      <h3> Website Development</h3>
          <div>Role played : React developer</div>
          <div>Skills used : React, HTML 5, Java Script, CSS</div>
          <div>
            <span>Project Description : </span>
            <ul>
              <li>
                Developing a website for internal employees for a popular telecommunication
                company.
              </li>
              <li>
                Creating an interactive website that provides great user experience.
              </li>
              <li>
                Interacting with Business Team to share the knowledge with them on monthly
                upgrades and system’s current functionality.
              </li>
              <li>
                Communicating regularly with product team leaders, end users, approvers and
                suppliers so they are prepared for the upcoming changes.
              </li>
            </ul>
          </div>
    </div>
  )
}

export default WebsiteDevelopment