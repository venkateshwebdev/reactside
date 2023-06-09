import { useEffect, useState } from 'react';
import './home.css'
const Home = () => {
    const [currentDate,setCurrentDate] = useState("");
    const [day,setDay] = useState("")
    const [hours,setHours] = useState("")
    const today = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    useEffect(()=>{
        const hh = today.getHours()
        const dd = today.getDay()
        const mm = today.toLocaleString('default', { month: 'short' })
        const yy = today.getFullYear();
        console.log(dd)
        console.log(hh)
        setCurrentDate(`${mm} ${dd} , ${yy}`)
        setDay(dd)
        if (hh>0 && hh<12){
            setHours("Morning")
        }
        else if (hh>12 && hh<18) {
            setHours("Afternoon")
        }
        else{
            setHours("Evening")
        }
    },[today])

    return(
        <div className="home-container">
            <div className='home-greet'>Good {hours}.</div>
            <div className='home-footer'>
                <div className='home-date'>
                    <h3 className='home-h3'>Today's {weekday[day]}</h3>
                    <p className='home-p'>{currentDate}</p>
                </div>
                <div className='home-work'>
                <h3 className='home-h3'>75% Done</h3>
                    <p className='home-p'>Completed Tasks</p>
                </div>
            </div>
        </div>
    )
}
 
export default Home;