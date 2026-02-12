
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

export const downloadPdf = async (result) => {

    try {
        
        const response = await axios.post(serverURL + "/api/pdf/generate-pdf" , {result},{
            responseType : "blob", withCredentials : true 
        })

        const blob = new Blob([response.data], {type: "application/pdf"})

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "PrepGenAI.pdf";
        link.click();

    } catch (error) {
        throw new Error("Pdf download fail")
        
    }

}