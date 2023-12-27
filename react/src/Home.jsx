import React from 'react'
import photo from './images/025321.jpg'

function Home() {
  return (
    <div>
        <div>
            <img src={photo} alt='My Photo' style={{width:'120px', height:'150px'}} />
        </div>
        <div>
            <h3>Description</h3>
            <div>
                I have 6 years of IT experience working on front end development. I want to be associated with a fast paced performance driven company which can provide me with a dynamic work sphere to utilize my inherent skills & to develop them to further organization’s objectives & also my career in the process.
            </div>
        </div>
    </div>
    
  )
}

export default Home