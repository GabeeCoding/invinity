import express from "express"
import path from "path"

const app = express()

app.use(express.static("dist"))

app.get("*", (req, resp) => {
	let filepath = path.join(__dirname, "dist", "index.html")
	resp.sendFile(filepath)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
