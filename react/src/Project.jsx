import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div>
      <ol>
        <li>
          <h3><Link to='/project/reporting_website'>Reporting Website </Link></h3>
          <div>Role played : React developer</div>
          <div>Skills used : React, HTML 5, Java Script, CSS</div>
          <div>
            <span>Project Description : </span>
            <span>Website for generating reports on demand and sale of the
                  products using AG-Grid React. Applying styles to existing components. Created
                  reusable components based on requirement. Implemented Grouping in AG-Grid
                  and applied custom Styling for it.</span>
          </div>
        </li>
        <li>
          <h3> <Link to='/project/website_development'>Website Development</Link></h3>
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
        </li>
        <li>
          <h3><Link to='/project/ecommerce_website'>E-commerce Website</Link></h3>
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
        </li>
      </ol>
    </div>
  )
}

export default Project