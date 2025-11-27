/**
 * @swagger
 * components:
 *  schemas:
 *      usuarios:
 *          type: object
 *          required:
 *              - id
 *              - nombre
 *              - correo
 *              - password
 *              - carrera
 *              - foto
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the user
 *              nombre:
 *                  type: string
 *                  description: The name of the user
 *              correo:
 *                  type: string
 *                  description: The email of the user
 *              password:
 *                  type: string
 *                  description: The password of the user, 8-12 characters
 *              carrera:
 *                  type: string
 *                  description: The career of the user
 *              foto:
 *                  type: string
 *                  description: The profile picture of the user
 */
/**
 * @swagger
 * tags:
 *  - name: usuarios
 *    description: Los endpoints del usuario
 * /users/:
 *  post:
 *      summary: Crear un nuevo usuario
 *      tags: [usuarios]
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              description: Nombre del usuario
 *                          correo:
 *                              type: string
 *                              description: Correo del usuario
 *                          password:
 *                              type: string
 *                              description: Contraseña del usuario
 *                          carrera:
 *                              type: string
 *                              description: Carrera del usuario
 *                          foto:
 *                              type: string
 *                              description: Foto de perfil del usuario
 *                      required:
 *                          - nombre
 *                          - correo
 *                          - password
 *                          - carrera
 *                          - foto
 *      responses:
 *          200:
 *              description: Usuario creado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/usuarios'
 *
 */
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
var router = require("express").Router();

const userCtrl = require("../controllers/users.js");

router.post("/new", userCtrl.createNewUser);

module.exports = router;
