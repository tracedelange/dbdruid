import React from 'react'
import ReubeenPlaceholder from '../assets/Reuben-HD.png'

const Reubeen = () => {
  return (
    <div className='content-container'>
    
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <img className='image' alt='Reubeen logo' src={ReubeenPlaceholder}></img>
    <h1 style={{marginTop: '0', color: '#071e26'}}>Reubeen</h1>


    </div>
    {/* </div> */}
    <p style={{fontStyle: 'italic'}}>The next generation of sandwich based social media</p>
    <p>I know you're probably thinking:</p>
    <ul style={{listStyle: 'none', padding: 0}}>
        <li style={{padding: 5}}>"Did anyone really ask for this?" Yes</li>
        <li style={{padding: 5}}>"Have you really spent a year of your life on this?" Nearly</li>
        <li style={{padding: 5}}>"Is this a joke?" You're hurting my feelings</li>
    </ul>

    <p>This isn't just another app... this is the next generation of social media</p>
    <b>Sandwich Based Social Media</b>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <i>Coming to an app store near you sometime in 2023</i>



    {/* <div className='quote-container'>
        <div className='quotation'>
            <p>"Why would you build this?"</p>

            
        </div>
    </div> */}


    </div>
  )
}

export default Reubeen