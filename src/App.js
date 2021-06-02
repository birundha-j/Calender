import React,{ useEffect, useState } from 'react';
import './App.css';


const currentdate = new Date();
const monthCalculate = ["January", "February","March","April","May","June","July","August","September","October","November","December"]
let findIndex = ""

function App() {
  // console.log(new Date(currentdate.getFullYear(),currentdate.getMonth() + 1,0).getDate(),"console")
  const [getDate,setgetDate] = useState(new Date(currentdate.getFullYear(),currentdate.getMonth() + 1,0).getDate())
  const [getDay,setgetDay] = useState(new Date(currentdate.getMonth() + 1,currentdate.getFullYear(),0).getDay())
  const [calenderDates,setcalenderDates] = useState("")
  const [oneTimeTrue,setoneTimeTrue] = useState(true)
  const [month,setMonth] = useState(currentdate.getMonth() + 1)
  const [year,setYear] = useState(currentdate.getFullYear())
  const [currentDay,setCurrentDay] = useState(new Date())
  var [rangeDate,setRangeDate] = useState([])


  console.log(calenderDates,"calenderDates")
  useEffect(()=>{
    if(oneTimeTrue){
    showDate()
    setoneTimeTrue(false)
    }
  })

  function highlight(id){


    if(rangeDate.length === 0){
    rangeDate.push(id)
    }else if(rangeDate.length === 1){

      var changeDate = new Date();
      changeDate.setDate(id.slice(0,2),id.slice(2,4),id.slice(4,9))
      console.log(changeDate,"changeDate")

      var firstDate = new Date()
      firstDate.setDate(rangeDate[0].slice(0,2),rangeDate[0].slice(2,4),rangeDate[0].slice(4,9))
      console.log(firstDate,"firstDate")



      for(let i = Number(rangeDate[0].slice(0,2));i < Number(id.slice(0,2));i++){

        let loopDate = new Date(new Date().setDate(firstDate.getDate() + i-Number(rangeDate[0].slice(0,2))+1))

      console.log(loopDate,"loopDate")


        let customDateLoop = loopDate.getDate() < 10 ? "0"+(loopDate.getDate()) : loopDate.getDate()
        let customMonthLoop = loopDate.getMonth()+1 < 10 ? "0"+(loopDate.getMonth()+1) : loopDate.getMonth()+1
        let rangeDateValue = customDateLoop+""+customMonthLoop+""+loopDate.getFullYear()

        rangeDate.push(rangeDateValue)

      }
      }else{
      rangeDate=[id]
    }
    showDate()
  }

  // single select

  // function showDate(){
  //   console.log(findIndex,"findindex")
  //   let noOfDate = []
  //   for(let i =1;i<=getDate+getDay;i++){
  //     if(i<=getDay){
  //       noOfDate.push(<td>{""}</td>)
  //     }else{
  //       noOfDate.push(<td onClick={()=>highlight(i+""+currentDay.getMonth()+currentDay.getFullYear())} className={i+""+currentDay.getMonth()+currentDay.getFullYear() === findIndex && "highlightNum"}>{i-getDay}</td>)
  //     }
  //   }

    function showDate(){
    console.log(findIndex,"findindex")
    let noOfDate = []
    for(let i =1;i<=getDate+getDay;i++){
      if(i<=getDay){
        noOfDate.push(<td>{""}</td>)
      }else{
        let customDate = i-getDay < 10 ? "0"+(i-getDay) : i-getDay
        let customMonth = currentDay.getMonth()+1 < 10 ? "0"+(currentDay.getMonth()+1) : currentDay.getMonth()+1

        noOfDate.push(<td onClick={()=>highlight(customDate+""+customMonth+currentDay.getFullYear())} 
        className={rangeDate[0] === customDate+""+customMonth+currentDay.getFullYear() ||
         rangeDate[rangeDate.length - 1] === customDate+""+customMonth+currentDay.getFullYear()  ? 
         "highlightNum" : rangeDate.includes(customDate+""+customMonth+currentDay.getFullYear()) && "highlightNumBw"}>
           {i-getDay}</td>)
      }
    }

    var trDate = []

    for(let j = 0;j < noOfDate.length;j++){
      var count = 0+j
      if(j%7 === 0 ){   //when push choose the starting value
        trDate.push(
        <tr>
          {noOfDate[count+0]}
          {noOfDate[count+1]}
          {noOfDate[count+2]}
          {noOfDate[count+3]}
          {noOfDate[count+4]}
          {noOfDate[count+5]}
          {noOfDate[count+6]}
        </tr>
        )
        count++
      }
    }

    setcalenderDates(trDate)

  }

  function handleRight(){
    var d = new Date();
    d.setMonth(month)
    console.log(d.setMonth(month),"d.setMonth(month)")
    d.setDate(1)
    console.log(d,"ddd")
    setgetDate(new Date(year,month+1,0).getDate())
    // console.log(new Date(year,month+1,0).getDate(),"new Date(year,month+1,0).getDate()")
    setgetDay(d.getDay())
    setMonth(month+1)
    setoneTimeTrue(true)
    setCurrentDay(d)
  }

  function handleLeft(){
    var d = new Date();
    d.setMonth(month-2)
    d.setDate(1)
    console.log(d,"ddd")
    setgetDate(new Date(year,month-1,0).getDate())
    setgetDay(d.getDay())
    setMonth(month-1)
    setoneTimeTrue(true)
    setCurrentDay(d)
  }

  return (
    <div className="container">
      <div className="btnAlign">
        <button onClick={()=>handleLeft()}>{"<"}</button>
          <div className="showDays">
            <div>{monthCalculate[currentDay.getMonth()]}</div>
            <div>{currentDay.getFullYear()}</div>
          </div>
        <button onClick={()=>handleRight()}>{">"}</button>
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
  );
}

export default App;
