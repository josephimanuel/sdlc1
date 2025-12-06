import express from "express";
import fileRoutes from "./routes/fileRoutes.js";

const app = express();
app.use(express.json());
app.use("/files", fileRoutes);

app.listen(3002, () => console.log("Case2 server listening on 3002"));