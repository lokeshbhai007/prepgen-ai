
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


export const generateNodes = async (payload) => {
    try {

        console.log("request come");
        

        const result = await axios.post(serverURL + "/api/notes/generate-notes", payload , {withCredentials: true})

        console.log("request gone");
        
        return result.data


    } catch (error) {

        console.log(error.message);
        
    }
} 