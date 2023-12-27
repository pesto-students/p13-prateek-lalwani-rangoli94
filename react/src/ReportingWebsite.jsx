import React from 'react'
import { Link } from 'react-router-dom'

function ReportingWebsite() {
  return (
    <div>
      <Link to='/project'><h5>Back</h5></Link>
      <h3>Reporting Website </h3>
          <div>Role played : React developer</div>
          <div>Skills used : React, HTML 5, Java Script, CSS</div>
          <div>
            <span>Project Description : </span>
            <span>Website for generating reports on demand and sale of the
                  products using AG-Grid React. Applying styles to existing components. Created
                  reusable components based on requirement. Implemented Grouping in AG-Grid
                  and applied custom Styling for it.</span>
          </div>
    </div>
  )
}

export default ReportingWebsite