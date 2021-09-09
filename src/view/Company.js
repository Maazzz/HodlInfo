import React from 'react'
import './Company.css';
function Company() {

    return (
        <div className='company'>
            <div className='copyright'>
                <p>Copyright © 2019</p>
                <p>HodlInfo.com</p>
                <p>Developed By <a href='https://www.quadbtech.com/' target='_blank' style={{color:'#36A4A2',textDecoration:'none'}}>QuadBTech</a></p>
            </div>
            <div>
                <p style={{cursor:'pointer'}}>Support</p>
            </div>
        </div>
    )
}

export default Company
