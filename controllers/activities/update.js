import Activity from '../../models/Activity.js'

export default async (req, res, next) => {
    try {
        let updateActivity = await Activity.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('name photo itinerary_id')
        if (updateActivity) {
            return res.status(200).json({
                success: true,
                message: 'activity updated',
                response: updateActivity
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'activity not updated',
                response: null
            })
        }
        
    } catch (error) {
        next(error)
    }
}