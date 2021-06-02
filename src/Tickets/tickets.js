import React, { useState } from 'react';
import './tickets.css'

function Tickets() {

    const [output, setoutput] = useState([])
    // const [empty, setempty] = useState([])

    function DisplayFields() {
    let p = [];

        let num1 = document.getElementById("num").value
        p.push(num1)
        setoutput([...output, <tr>p</tr>])
        // for(let i=0;i<=num1;i++){
            
        // }

    }
    console.log(output,"out")
    function add(){
        alert("added")
    }
    return (
        <div className="conteainer">
            Number of tickets :
            <br></br>
            <div className="design">
                <input type="number" id="num"></input>
                <button onClick={DisplayFields}>submit</button>
            </div>
            {output.map((data) => {
                return (
                    <div className="tables">
                    <table>
                        <tr>
                            <th>Name</th>
                            <td>{<input type="text"></input>}</td>
                            {/* <td><button onClick={add}>submit</button></td> */}
                        </tr>
                        <tr>
                            <td>From</td>
                            <td>{<input type="text"></input>}</td>
                        </tr>
                        <tr>
                            <td>To</td>
                            <td>{<input type="text"></input>}</td>
                        </tr>


                    </table>
                    </div>
                )
            })

            }



        </div>
    )
}
export default Tickets;