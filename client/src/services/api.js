
import { serverURL } from "../App"
import axios from "axios";
import { setUserData } from "../redux/userSlice";

export const getCurrUser = async (dispatch) =>{
    try {

        const result = await axios.get(serverURL + "/api/user/currentuser" , 
            {withCredentials : true })
        

        dispatch(setUserData(result.data))
        
        
    } catch (error) {

        console.log(error.message);
        
        
    }
}