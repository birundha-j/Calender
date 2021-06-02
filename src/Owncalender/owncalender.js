import React, { useEffect, useState } from 'react';

import './owncalender.css';
let d = new Date()
const monthCalculate = ["January", "February","March","April","May","June","July","August","September","October","November","December"]


function NewCalender() {
    const [calenderDates, setcalenderDates] = useState([])
    const [getDate, setgetDate] = useState(new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate())
    const [getDay, setgetDay] = useState(new Date(d.getMonth() + 1, d.getFullYear(), 0).getDay())
    const [oneTimeTrue, setoneTimeTrue] = useState(true)
    const [month, setMonth] = useState(d.getMonth() + 1)
    const [year, setYear] = useState()
    const [currentDay, setCurrentDay] = useState(new Date())


    // const

    useEffect(() => {
        if (oneTimeTrue) {
            showDate()
            setoneTimeTrue(false)
        }
    })
    function showDate() {
        // console.log(getDate, "findindex")
        let Alldates = []
        for (let i = 1; i <= getDate + getDay; i++) {
            if (i <= getDay) {
                Alldates.push(<td>{""}</td>)
            } else {
                Alldates.push(<td >{i - getDay}</td>)
            }
        }
        var trDate = []

        for (let j = 0; j < Alldates.length; j++) {
            var count = 0 + j
            if (j % 7 === 0) {  //when push choose the starting value
                trDate.push(
                    <tr>
                        {Alldates[count + 0]}
                        {Alldates[count + 1]}
                        {Alldates[count + 2]}
                        {Alldates[count + 3]}
                        {Alldates[count + 4]}
                        {Alldates[count + 5]}
                        {Alldates[count + 6]}
                    </tr>
                )
                count++
            }
        }

        setcalenderDates(trDate)

    }
    function Next() {
        d.setMonth(month)
        // console.log(n.setMonth(month),"n.setMonth(month)")
        d.setDate(1)
        // console.log(n.setDate(1),"n.setDate(1)")
        // console.log(n,"ddd")

        setgetDate(new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate())
        // console.log(new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(),"new Date(year, month + 1, 0).getDate()")
        setgetDay(d.getDay())
        setMonth(month + 1)
        setoneTimeTrue(true)
        setCurrentDay(d)
    }
    function Previous() {
        d.setMonth(month-2)
        d.setDate(1)
        setgetDate(new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate())
        setgetDay(d.getDay())
        setMonth(month - 1)
        setoneTimeTrue(true)
        setCurrentDay(d)



    }
    return (
        <div className="container">

            <div className="buttons">
                <button onClick={() => Previous()}>{"<<"}</button>
                <div>{monthCalculate[d.getMonth()]}</div>
                <div>{d.getFullYear()}</div>
                <button onClick={() => Next()}>{">>"}</button>

            </div>
            <table>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                {calenderDates}
            </table>
        </div>
    )
}
export default NewCalender;