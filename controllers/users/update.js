import User from "../../models/User.js";

export default async (req, res) =>{
  try {
    let updatedUser = await User.findByIdAndUpdate(
      req.params.u_id,
      req.body,
      {new:true}  //Por default en FALSE y devuelve el objeto ANTES de la modificacion.
                  //Si lo cambio a TRUE devuelve el objeto LUEGO de la modificación.
      ).select("name photo mail");
      return res.status(200).json({
        success: true,
        message: "User Updated!",
        response: updatedUser
      })
  } catch (error) {
      return res.status(400).json({
        succes: false,
        message: "not updated",
        response: null
      })
    }
}