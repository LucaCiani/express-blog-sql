const connection = require("../data/postsData.js");

// Funzioni del controller per gestire le operazioni CRUD sui post

// index: Elenco dei post
function index(req, res) {
    const sql = "SELECT * FROM posts";
    connection.query(sql, (err, results) => {
        if (err)
            return res.status(500).json({ error: "Database query failed" });
        res.json(results);
    });
}

// show: Dettagli di un post specifico
function show(req, res) {
    const { id } = req.params;
    const sql = "SELECT * FROM posts WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err)
            return res.status(500).json({ error: "Database query failed" });
        if (results.length === 0)
            return res.status(404).json({ error: "Post not found" });
        res.json(results[0]);
    });
}

// store: Creazione di un nuovo post
function store(req, res) {
    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    posts.push(newPost);
    console.log(posts);
    res.status(201).json(newPost);
}

// update: Aggiornamento di un post specifico
function update(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato",
        });
    }
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
    console.log(posts);
    res.json(post);
}

// modify: Modifica parziale di un post specifico
function modify(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato",
        });
    }
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
    console.log(posts);
    res.json(post);
}

// destroy: Cancellazione di un post specifico
function destroy(req, res) {
    const { id } = req.params;
    connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
        if (err)
            return res.status(500).json({ error: "Failed to delete post" });
        res.sendStatus(204);
    });
}

// Esportazione delle funzioni del controller
// Queste funzioni saranno utilizzate nelle rotte del router dei post
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};
