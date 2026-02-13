import Notes from "../models/notes.model.js"


export const historyOFNotes = async(req, res) => {

    try {

        const user = req.userID
        console.log("yes come here 1");
        
        console.log(user);
        console.log("yes come here 2");
        
        const historyData = await Notes.find({user}).sort({ createdAt: -1 });

        if(historyData.length === 0){
            return res.status(404).json({
                message : "Not found any history",
                success : false,

            })
        }


        console.log("History count:", historyData.length);

        return res.status(200).json({
            message : "Got the History",
            success : true,
            historyData : historyData

        })
        
        
    } catch (error) {

        return res.status(500).json({
            message : "Internal Server error",
            success : false,

        })
        
    }

} 