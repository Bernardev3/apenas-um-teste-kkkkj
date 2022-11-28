const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("<h1 style='font-family: sans-serif'>Hello, World!</h1>");
});

app.listen(port, function() {
    console.log("Servidor rodando na porta " + port + "!");
});