import React from 'react'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <div className='content-container'>
        <h3>
            Reubeen Support
        </h3>

        <p>You can reach out to the following email address for any in-app issues, concerns or support requests: <a href='mailto:tracedelange@me.com'>tracedelange@me.com</a> </p>
        <p>Click <Link to='/reubeen/privacy_policy'>here</Link> to view the ReuBeen privacy policy</p>


    </div>
  )
}

export default Support