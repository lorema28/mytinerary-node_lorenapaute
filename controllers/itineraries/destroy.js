import Itinerary from '../../models/Itinerary.js';

export default async(req,res,next)=> {
  try {
      let { id } = req.params
      let one = await Itinerary.findByIdAndDelete(id)
      //AGREGAR CONDICIONAL POR SI NO ENCUENTRA AL ITINERARIO
      return res.status(200).json({
          success: true,
          message: 'itinerary deleted',
          response: one._id
      })
  } catch (error) {
      next(error)
  }
}