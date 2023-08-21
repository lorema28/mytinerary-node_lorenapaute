import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let deletedUser = await User.findByIdAndDelete(req.params.d_id)
    return res.status(200).json({
      success: true,
      message: "User Deleted!",
      response: deletedUser._id
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "User not Deleted ",
      response: null
    })
  }
}