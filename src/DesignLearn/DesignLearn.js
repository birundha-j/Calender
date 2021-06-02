import React from "react";
import "./DesignLearn.css";
import Logo from "../images/Logo.png";
import Search from "../images/search.png";
import Doctor from "../images/doctor.jpg";
import Home from '../images/Home.png'
import Online from '../images/online.png'
import Center from '../images/Centrer.jpg'
import homeImg from "../images/largeWidthImg.jpg"
import Profile from "../images/Profile_Princess_Sofia.png"
import Message from '../images/Message.png';
import Offer from '../images/offer.jpg'


function DesignLearn() {
    return (
        <div className="Master">
            <div className="Container">
                <div className="layoutContainer">
                    <img src={Logo} className="logoAlign" />
                    <div className="menuContainer">
                        <div className="homeMenu">Home</div>
                        <div>Shopping</div>
                    </div>
                    <div className="inputContainer">
                        <input />
                        <img src={Search} />
                    </div>
                    <div className="notifyContainer">
                        <div>🔔</div>
                        <div>📅</div>
                        <img src={Profile} />
                    </div>
                </div>
            </div>
            <img src={homeImg} className="homeImgAlign" />
            <div className="Content">

                <div className="roundProfile">
                    <img src={Doctor} />
                    <div>4.5★</div>
                    <div>152 Reviews</div>
                </div>
                <div className="userDetails">
                    <h1>Nivedha</h1>
                    <h2>★★★★★</h2>
                    <h3>34 years / Female</h3>
                    <h4>shamiya</h4>
                    <div className="userDetailsImg">
                        <div className="imgHome">
                            <img src={Home} /><div>Home</div>
                        </div>
                        <div className="imgOnline">
                            <img src={Online} /><div>Online</div>
                        </div>
                        <div className="imgCenter">
                            <img src={Center} /><div>Center</div>
                        </div>
                    </div>
                </div>
                <div className="userYear">
                    5Years
                </div>
            </div>
            <div className="subheading">
                <h3>Indoor - Fitness</h3>
                <img src={Message} />
            </div>
            {/* <div className="offers">
            </div> */}
            <div className="footer">
                <div className="div1"><h4>Circuit Training<br></br>10<br></br>Session<br></br><b>90 kwd</b><br></br>Mon - Thu</h4>
                </div>
                <img className="offerimg1" src={Offer} />
                <div></div>
                <div className="div2"><h4>Burn It<br></br>30<br></br>Sessions<br></br>160 kwd<br></br>Mon - thu</h4>
                </div>
                <img className="offerimg2" src={Offer} />
                <div></div>



            </div>
        </div>


    )
}

export default DesignLearn;


{/*  */ }