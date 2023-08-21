import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
  try {
    let allItineraries = await Itinerary.find()
    return res.status(200).json({
      success: true,
      message: "🎉 Itenaries found! 🎉",
      response: allItineraries
    })
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: "😯 Itinerary not found",
      response: null
    })
  }
}