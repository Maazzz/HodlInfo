import React,{useState} from 'react'
import './Header.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import TelegramIcon from '@material-ui/icons/Telegram';
import {Link} from 'react-router-dom';
function Header() {
    const [value, setvalue] = React.useState('BTC');
    
    const handleChange = (event) => {
        setvalue(event.target.value);
    };
    const curr = [
        {
            label:'BTC',
            value:'BTC'
        },
        {
            label:'ETH',
            value:'ETH'
        },
        {
            label:'USDT',
            value:'USDT'
        },
        {
            label:'XRP',
            value:'XRP'
        },
        {
            label:'TRX',
            value:'TRX'
        },
        {
            label:'DASH',
            value:'DASH'
        },
        {
            label:'ZEC',
            value:'ZEC'
        },
        {
            label:'XEM',
            value:'XEM'
        },
        {
            label:'IOST',
            value:'IOST'
        },
        {
            label:'WIN',
            value:'WIN'
        },
        {
            label:'BTT',
            value:'BTT'
        },
        {
            label:'WRX',
            value:'WRX'
        },
    ]
    return (
        
        <div className='header'>
            
            <div className='Logo'>
             <Link to='/' style={{textDecoration:'none'}}>
                <img src='https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png' className='logo' alt='HoldInfo-logo'></img>
             </Link>
                <p>Powered By <a href='https://www.finstreet.in' style={{textDecoration:'none'}} target='_blank'>Finstreet</a></p>
            </div>
            <div className='buttons'>
                <select className='inr select'>
                    <option value='INR'>INR</option>
                </select>
                <select className='select'
                onChange={handleChange}>
                    {curr.map(currency =>(
                        <option value={currency.label}>{currency.value}</option>
                    ))}
                </select>
                <button className='select'>BUY {value}</button>
            </div>
            <div className='right'>
            <CountdownCircleTimer
            size={40}
            strokeWidth={4}
            isPlaying
            duration={60}
            colors={[
                ['#3DC6C1', 0],
                ['#3DC6C1', 1],
            ]}
            onComplete={() => [true,-500]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            <button className='telegram'><TelegramIcon/>Connect Telegram</button>
            
            </div>
        </div>
    )
}

export default Header
