import React from 'react';
import './Price.css';
function Price() {
    return (
        <div className='Price'>
           <p className='bestPrice'>Best Price to Trade</p>
           <div className='prices'>
               <div>
                   <p className='percent'>0.21%</p>
                   <p className='time'>5 Mins</p>
               </div>
               <div>
                   <p className='percent'>0.35%</p>
                   <p className='time'>1 Hour</p>
               </div>
               <div className='rup'>
                   <p className='rupees'>₹ 36,50,946</p>
                   <p className='rupeescap'>Average BTC/INR net price including commission</p>
               </div>
               <div>
                   <p className='percent'>10.24%</p>
                   <p className='time'>1 Day</p>
               </div>
               <div>
                   <p className='percent'>10.84%</p>
                   <p className='time'>7 Days</p>
               </div>
           </div>
           <a href='https://finstreet.in/' target='_blank'><img className='learn' href='https://finstreet.in/' alt='FinsTreet Learn' src='https://hodlinfo.com/static/media/cryptonews.54869ee3.png'/></a>
        </div>
    )
}

export default Price
