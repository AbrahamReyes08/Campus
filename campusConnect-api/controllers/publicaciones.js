const { publicaciones } = require("../models");

const createNewPublicacion = async (req, res) => {
  try {
    const newPublicacion = await publicaciones.create(req.body);
    res.status(200).json();
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = {
  createNewPublicacion,
};
