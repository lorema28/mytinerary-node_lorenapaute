import Activity from "../../models/Activity.js";

export default async (req, res,next) => {

try{
let queries = {}
if (req.query.itinerary_id) {
  queries.itinerary_id = req.query.itinerary_id
}



let allActivities = await Activity
.find(queries,'-__v -createdAt -updatedAt')      
.populate({
        path:"itinerary_id",
        select: "_id name photo"
      })
      return res.status(200).json({
        success: true,
        message: 'activities found',
        response: allActivities
    })

} catch (error) {
  next(error)
}
}

  




