import homeSass from "../assets/Sass-src/Home.module.scss"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Welcome from "./BreakHome/Welcome";
import coatofarm from "../assets/background/1200px-Coat_of_arms_of_Nigeria.svg.png";
import Activities from "./BreakHome/Activities"
import CurrentPresident from "./BreakHome/CurrentPresident";
import Developers from "./BreakHome/Developers";
import Footer_Home from "./BreakHome/Footer_Home";
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import {useState} from "react"

export default function Home(){
    const [openSignup, setopenSignup] = useState(false)
    const closeSignup = ()=> setopenSignup(false)
    const [openSignIn, setopenSignIn] = useState(false)
    const closeSignIn = ()=> setopenSignIn(false)

    return(
        <div className={homeSass.home_ngBack}>
            <div className={homeSass.home_main_Welcome}>
                <Welcome styles={homeSass}/>
                <img src={coatofarm} alt="1200px-Coat_of_arms_of_Nigeria.svg.png"/>
            </div>
            <div className={homeSass.home_main_tour}>
                <Link to="tour"><Button variant="warning" size="lg" active><span>Take A Tour</span></Button></Link>
            </div>
            <div className={homeSass.home_main_img}>
            <div className={homeSass.home_main_activities}>
                <h2>Election Activities</h2>
                <Activities styles={homeSass}/>
            </div>
            <div className={homeSass.signup_in}>
            
            <Button variant="success" size="lg" active onClick={()=> setopenSignup(o => !o)}><span>Sign Up</span></Button>
                <Popup open={openSignup} closeOnDocumentClick onClose={closeSignup} position="right center" modal>
                    <h2>Sign-up</h2>
                    <Button variant="success" size="lg" active onClick={closeSignup}><span>Close Sign Up</span></Button>
                </Popup>

                <Button variant="success" size="lg" active onClick={()=> setopenSignIn(o => !o)}><span>Sign In</span></Button>
                <Popup open={openSignIn} closeOnDocumentClick onClose={closeSignIn} position="right center" modal>
                    <h2>Sign-In</h2>
                    <Button variant="success" size="lg" active onClick={closeSignIn}><span>Close Sign In</span></Button>
                </Popup>
            </div>
            <CurrentPresident styles={homeSass}/>
            <Developers styles={homeSass}/>
            <Footer_Home styles={homeSass}/>
            </div>
        </div>
    )
}