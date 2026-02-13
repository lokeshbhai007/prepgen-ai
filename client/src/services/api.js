
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



/**
 * Fetches paginated history notes
 * @param {number} page - Page number (1, 2, 3...)
 * @param {number} limit - Items per page (default: 10)
 * @returns {Promise} - Returns history data with pagination info
 */
export const historyNotesData = async (page = 1, limit = 10) => {
    try {
        // Build URL with query parameters
        // Example: http://localhost:5000/api/history/notes-history?page=2&limit=10
        const response = await axios.get(
            `${serverURL}/api/history/notes-history?page=${page}&limit=${limit}`, 
            { withCredentials: true }
        )

        console.log("Fetched:", response.data.historyData.length, "notes for page", page)

        // Return structured data
        return {
            historyData: response.data.historyData,     // Array of notes
            total: response.data.total,                 // Total count
            totalPages: response.data.totalPages,       // Total pages
            currentPage: response.data.currentPage,     // Current page
            hasNextPage: response.data.hasNextPage,     // Can go next?
            hasPrevPage: response.data.hasPrevPage      // Can go back?
        }
        
    } catch (error) {
        console.error("API Error:", error)
        throw new Error("History could not be fetched")
    }
}