const express = require("express");
const router = express.Router();

// Importazione del controller dei post
const postController = require("../controllers/postController");

// Definizione delle rotte per i post
// GET /posts - Elenco dei post
router.get("/", postController.index);
// GET /posts/:id - Dettagli di un post specifico
router.get("/:id", postController.show);
// POST /posts - Creazione di un nuovo post
router.post("/", postController.store);
// PUT /posts/:id - Aggiornamento di un post specifico
router.put("/:id", postController.update);
// PATCH /posts/:id - Modifica parziale di un post specifico
router.patch("/:id", postController.modify);
// DELETE /posts/:id - Cancellazione di un post specifico
router.delete("/:id", postController.destroy);

module.exports = router;
