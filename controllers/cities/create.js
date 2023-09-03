import City from '../../models/City.js';

export default async(req, res) => {
  try {
    let newCity = await City.create(req.body);
    return res.status(201).json({
      success: true,
      message: 'City Created ',
      response: newCity._id
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: "The City couldn't be Created ",
      response: null
    })
  }
}