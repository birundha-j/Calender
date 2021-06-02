import React from 'react';
import Doctor from '../images/doctor.jpg'
import Home from '../images/Home.png'
import Online from '../images/online.png'
import Center from '../images/Centrer.jpg'
import './project.css'
const icons = [{ img: Home, title: "Home" },
{ img: Online, title: "Online" },
{ img: Center, title: "Center" }
]
function Newdesign() {
    return (
        <div className="container">
            <img className="imagedesign" src={Doctor}></img>
            <div>
                <div className="circledesign">
                    <img className="circleimage" src={Doctor}></img>
                </div>
                <div>
                    <button className="btnchange">4.5 ★</button>
                    <div className="review">152 Rewiviews</div>
                </div>

                <div >
                    <div className="text"><h1>Farah</h1></div>
                    <div className="statcolor">★★★★★</div>
                    <div className="text1">34 years / Female</div>
                    <div className="text2">shamiya</div>
                    {/* <div className="text3">...</div> */}
                    <div>
                        {icons.map((data)=>{
                            return (
                                
                                <img className="imageview" src={data.img}></img>
                                
                            )})}
                    </div>
                    <div className="btnyears"><button>5 years</button></div>
                <h3 className="h3">Indoor - Fitness</h3>
                <div >
                <div className="box1">Circuit Training<br></br>10<br></br>Session<br></br><b>90 kwd</b><br></br>Mon - Thu</div>
                <div className="box2" >Burn It<br></br>30<br></br>Sessions<br></br>160 kwd<br></br>Mon - thu</div>
                </div>
                
                </div>
            </div>
        </div>

    )
}
export default Newdesign;
