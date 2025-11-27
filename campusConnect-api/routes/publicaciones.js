/**
 * @swagger
 * components:
 *  schemas:
 *      publicaciones:
 *          type: object
 *          required:
 *              - idUser
 *              - titulo
 *              - contenido
 *              - categoria
 *              - fecha
 *          properties:
 *              idUser:
 *                  type: integer
 *                  description: The auto-generated id of the user
 *              titulo:
 *                  type: string
 *                  description: The title of the publication
 *              contenido:
 *                  type: string
 *                  description: The content of the publication
 *              categoria:
 *                  type: string
 *                  description: The category of the publication
 *              fecha:
 *                  type: string
 *                  description: The date of the publication
 *
 */
/**
 * @swagger
 * tags:
 *  - name: publicaciones
 *    description: Los endpoints de las publicaciones
 * /api/publicaciones/:
 *  post:
 *      summary: Crear una nueva publicación
 *      tags: [publicaciones]
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          titulo:
 *                              type: string
 *                              description: Título de la publicación
 *                          contenido:
 *                              type: string
 *                              description: Contenido de la publicación
 *                          categoria:
 *                              type: string
 *                              description: Categoría de la publicación
 *                          fecha:
 *                              type: string
 *                              description: Fecha de la publicación
 *                      required:
 *                          - titulo
 *                          - contenido
 *                          - categoria
 *                          - fecha
 *      responses:
 *          200:
 *              description: Publicación creada exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                              data:
 *                                  $ref: '#/components/schemas/publicaciones'
 *
 */
var express = require("express");
var router = express.Router();

const publicacionCtrl = require("../controllers/publicaciones.js");

router.post("/", publicacionCtrl.createNewPublicacion);

module.exports = router;
