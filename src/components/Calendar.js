import { useState } from 'react';
import '../stylesheets/Calendar.css';

function Calendar() {
    const [date, setDate] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth()
    })
    const generateCalendarData = (y = date.year, m = date.month) => {
        console.log(y, m)
        const lastDay = new Date(y, m + 1, 0).getDate();
        const startsOn = new Date(y, m, 1).getDay();
        const DAYS_IN_WEEK = 7;
        const MAX_ELEMENTS_IN_CALENDAR = 7 * 7;
        return {
            lastDay,
            startsOn,
            year: y,
            completeCalendar: MAX_ELEMENTS_IN_CALENDAR - (DAYS_IN_WEEK + lastDay + startsOn)
        }
    }


    const monthNames = [...Array(12).keys()].map(index => {
        return (new Date(date.year, index).toDateString().split(" ")[1])
    })
    const yearNumbers = [...Array(10).keys()].map(index => index + new Date().getFullYear());

    const data = generateCalendarData();

    const handlerDateChange = (e) => {
        console.log(e.target.name);
        setDate((oldDate) => {
            return {
                ...oldDate,
                [e.target.name]: Number(e.target.value)
            }
        })
    }

    return (

        <div className="calendar">
            <div className="date-body">
                <p className="calendar-title">
                    calendar
                </p>
                <div className="date-selector">
                    <select name="month" value={date.month} onChange={(e) => { handlerDateChange(e) }}>
                        {
                            monthNames.length ?
                                monthNames.map((month, index) => <option key={month} value={index}>
                                    {month}
                                </option>)
                                :
                                <></>


                        }
                    </select>
                    <select name="year" value={date.year} onChange={(e) => { handlerDateChange(e) }}>
                        {
                            yearNumbers.length ?
                                yearNumbers.map(year => <option key={year} value={year}>
                                    {year}
                                </option>)
                                :
                                <></>
                        }
                    </select>
                </div>
            </div>
            <div className="calendar-body">
                <p className='calendar-children'>Sun</p>
                <p className='calendar-children'>Mon</p>
                <p className='calendar-children'>Tue</p>
                <p className='calendar-children'>Wed</p>
                <p className='calendar-children'>Thu</p>
                <p className='calendar-children'>Fri</p>
                <p className='calendar-children'>Sat</p>
                {
                    [...Array(data.startsOn).keys()].map((notDay) => {
                        return (
                            <p key={notDay} className={`calendar-children`} ></p>
                        )
                    })
                }
                {
                    [...Array(data.lastDay).keys()].map((day) => {
                        const realDay = day + 1;
                        return (
                            <p key={day} className={`calendar-children`} style={realDay === 1 ? { gridColumnStart: data.startsOn + 1 } : {}}> {realDay}</p>
                        )
                    })
                }
                {
                    [...Array(data.completeCalendar).keys()].map((notDay) => {
                        return (
                            <p key={notDay} className={`calendar-children`} ></p>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Calendar