import express from "express";
const app = express();
const port = 3001;
app.use((req, res, next) => {
    res.send("ERROR: 404 Not Found Error");
});
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
//# sourceMappingURL=app.js.map