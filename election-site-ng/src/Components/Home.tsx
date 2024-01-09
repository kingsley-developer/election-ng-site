import homeSass from "../assets/Sass-src/Home.module.scss"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Welcome from "./BreakHome/Welcome";
import coatofarm from "../assets/background/1200px-Coat_of_arms_of_Nigeria.svg.png";
import Activities from "./BreakHome/Activities"
import CurrentPresident from "./BreakHome/CurrentPresident";
import Developers from "./BreakHome/Developers";
import Footer_Home from "./BreakHome/Footer_Home";
import {useState} from "react"
import SignUp from "./user-signupinout/Signup";
import Modal from 'react-bootstrap/Modal';

export default function Home(){
    const [fullscreen, setFullscreen] = useState([]);
    const [show, setShow] = useState(false);
    const fullScreen_break = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down']
    const ref_FullS = fullScreen_break

    function handleShow() {
        setFullscreen(ref_FullS);
        setShow(true);
    }
    
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
               <Button variant="success" size="lg" active onClick={() => handleShow()}>
                  <span>Sign Up</span>
              </Button>
              <Modal
              autoFocus={true}
              show={show} 
              fullscreen={fullscreen} 
              onHide={() => setShow(false)}
              dialogClassName={homeSass.homeSignup_popupmain_dialog}
              contentClassName={homeSass.homeSignup_popupmain}
              centered={true}
              animation={true}
              scrollable={true}>
                    <Modal.Body>
                    <SignUp/>    
                    </Modal.Body>
                </Modal>
            
            </div>
            <CurrentPresident styles={homeSass}/>
            <Developers styles={homeSass}/>
            <Footer_Home styles={homeSass}/>
            </div>
        </div>
    )
}