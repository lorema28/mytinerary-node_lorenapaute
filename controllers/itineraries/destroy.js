import Itinerary from '../../models/Itinerary.js';

export default async (req, res) => {
  try {
    let deletedItinerary = await Itinerary.findByIdAndDelete(req.params.d_id);
    return res.status(200).json({
      success: true,
      message: "🚮 Itinerary Deleted!",
      response: deletedItinerary._id
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: " Itinerary not Deleted! "
    })
  }
}