const { Usuarios } = require("../models");

const createNewUser = async (req, res) => {
  try {
    const repeatEmail = await Usuarios.findOne({
      correo: req.body.correo,
    });
    if (!repeatEmail) {
      const newUser = await Usuarios.create(req.body);
      res.status(201).json();
    } else {
      res.status(409).json({
        status: "Email Conflict",
        message: "The email is already registered, try with another one.",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
