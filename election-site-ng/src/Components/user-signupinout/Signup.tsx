import signUpSass from "../../assets/Sass-src/SignUp.module.scss"
import React, {useState} from "react"
import { signup_user } from "../../features/redux-store/user-profile/User_Profile"
import { useAppDispatch } from "../../features/redux-store/hooks"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"

export default function SignUp(){
    const [user, setUser] = useState({
    profile_Pic: "",
    firstname: "",
    middlename: "",
    lastname: "",
    voter_NIN_Id: "",
    age: 0,
    dateOfBirth: "",
    phoneNumber: 0,
    address: "",
    email: "",
    stateOfOrigin: "",
    originLGA: "",
    currentState: "",
    currentLGA: "",
    accessToken: "",
    votingCount: 0
    })
    const Dash = useNavigate()

    const userDispatch = useAppDispatch()

    function addUserData(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setUser((prev)=>{
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    function submit_User(event: React.ChangeEvent<HTMLFormElement>){
        event.preventDefault()
        userDispatch(signup_user(user))
        Dash("/dashboard")
    }

    return(
        <React.Fragment>
            <div className={signUpSass.signUP_main}>
            <h2 className={signUpSass.signUP_Title}>Sign Up</h2>
            <div className={signUpSass.signUP_Form}>
            <Form onSubmit={submit_User}>
                <Form.Group className="mb-3" controlId="formprofilepicid">
                 <Form.Label>Choose Profile Picture</Form.Label>
                <Form.Control type="file" name="profile_Pic" onChange={addUserData}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formfirstnameid">
                 <Form.Label>Enter First Name</Form.Label>
                <Form.Control type="text" placeholder="Kingsley" name="firstname" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formmiddlenameid">
                 <Form.Label>Enter Middle Name</Form.Label>
                <Form.Control type="text" placeholder="Chinemelu" name="middlename" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formlastnameid">
                 <Form.Label>Enter Last Name</Form.Label>
                <Form.Control type="text" placeholder="Anyichie" name="lastname" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formvorninid">
                 <Form.Label>Enter voters card ID or NIN ID</Form.Label>
                <Form.Control type="text" name="voter_NIN_Id" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formageid">
                 <Form.Label>Enter Age</Form.Label>
                <Form.Control type="text" placeholder="18" name="age" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formlastdateid">
                 <Form.Label>Enter Date of birth</Form.Label>
                <Form.Control type="date" name="dateOfBirth" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formnumberid">
                 <Form.Label>Enter Phone Number</Form.Label>
                <Form.Control type="text" placeholder="08060673228" name="phoneNumber" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formaddressid">
                 <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="adankolo new layout" name="address" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formsooid">
                 <Form.Label>State Of Origin</Form.Label>
                <Form.Control type="text" placeholder="Anambra" name="stateOfOrigin" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formolgaid">
                 <Form.Label>Origin L.G.A.</Form.Label>
                <Form.Control type="text" placeholder="Onitsha" name="originLGA" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formcsid">
                 <Form.Label>Current State</Form.Label>
                <Form.Control type="text" placeholder="Kogi" name="currentState" onChange={addUserData}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formcslgaid">
                 <Form.Label>Current State L.G.A.</Form.Label>
                <Form.Control type="text" placeholder="Kogi" name="currentLGA" onChange={addUserData}/>
                 </Form.Group>
                <div className={signUpSass.signUP_Form_b}>
              <Button variant="success" type="submit" active size="lg">
              <span>Sign Up</span>
              </Button>
              </div>
          </Form>
          </div>
          </div>
        </React.Fragment>
    )
}