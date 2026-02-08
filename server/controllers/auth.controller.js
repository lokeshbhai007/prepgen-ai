import UserModel from "../models/user.model.js";
import getToken from "../utils/token.utils.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({ name, email });
    }

    let token = getToken(user._id)

    res.cookie("token" , token, {
        httpOnly : true,
        secure : false,
        samesite : "strict",
        maxAge : 7 * 24 * 60 * 60 * 1000
    })

    return res.status(200).json({
        message : "Sign in successfully",
        success : true,
        user : user
    })

  } catch (error) {

    return res.status(500).json({
        message : "Internal server error",
        success : false,
    })
    
  }
};


export const logOut = async (req, res) => {

    try {

        await res.clearCookie("token")
        return res.status(200).json({
            message : "Log out successfully",
            success : true,
        })
        
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error",
            success : false,
        })
    }

}