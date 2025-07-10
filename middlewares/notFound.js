function notFound(req, res, next) {
    res.status(404).json({
        error: "Not Found",
        message: "La risorsa richiesta non è stata trovata",
    });
}

module.exports = notFound;
