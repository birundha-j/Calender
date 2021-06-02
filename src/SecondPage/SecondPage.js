import React from "react";
import './SecondPage.css';
import Offer from '../images/offer.jpg'
function SecondPage() {
    return (
        <div className="Maincontainer">
            <div className="headerContainer">
                <div>
                    <div><h2>Farah</h2></div>
                    <div><h2>Indoor - Fitness</h2></div>
                    <div>Burn IT <b>160 kwd</b></div>
                </div>
                <div className="Bookdesign">Book </div>
            </div>
            <div className="content">
                <div className="contentText">
                    <div className="numberscontent">
                        <div className="thirty">30</div>
                        <div className="session">Sessions<br /><b>Mon-Thu</b></div>
                        {/* <div><img className="imagesize" src={Offer}/></div> */}
                        <div><img className="imagesize" src={Offer} /></div>

                    </div>
                </div>
                <div className="line">
                    <div className="grayline">{""}</div>
                    <div className="greenline">{"  "}</div>
                </div>

            </div>

            <div className="footer">
                <p>Lose,weight,gain,strength and tone muscles in 30 minutes.Inspired by High Intensity interval Training (HIT), you use your<br></br>
                own  body weight and  minimal equipment like elastic bands,dumbbeils and kettie bells.Burn it is for women who are ready for
                a new fitness challenge.
                    </p>

            </div>
            <div className="last">Features :</div>

        </div>
    )
}
export default SecondPage;