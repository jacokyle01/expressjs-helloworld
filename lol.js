const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "lol.html"));
});

app.get("/test", (req, res) => {
    res.send("test");
});

const PORT = 8080; // You can choose any available port
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
