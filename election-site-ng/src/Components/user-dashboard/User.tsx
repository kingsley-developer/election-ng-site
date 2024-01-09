import { useAppSelector } from "../../features/redux-store/hooks"

export default function User(){
    const firstname = useAppSelector((state) => state.user.newUser.firstname)//TESR THIS
    return(
        <div>
            <h1>User {firstname}</h1>
        </div>
    )
}