const { Usuarios } = require("../models");

const createNewUser = async (request, response) => {
  try {
    if (!request.body || Object.keys(request.body).length === 0) {
      return response.status(400).json({
        status: "BAD REQUEST",
        message: "Asegúrese de enviar todos los campos.",
      });
    }

    const repeatEmail = await Usuarios.findOne({
      where: {
        correo: request.body.correo,
      },
    });

    if (repeatEmail) {
      return response.status(409).json({
        status: "Email Conflict",
        message: "Email already exist, pls use other email",
      });
    }

    const newUser = await Usuarios.create(request.body);

    return response.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (error) {
    console.error("Error en createNewUser:", error);
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const getAllUsuarios = async (request, response) => {
  try {
    const usuarios = await Usuarios.findAll();

    return response.status(200).json({
      status: "success",
      data: usuarios,
    });
  } catch (error) {
    console.error("Error en getAllUsuarios:", error);
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = {
  createNewUser,
  getAllUsuarios,
};
