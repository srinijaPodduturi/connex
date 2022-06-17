import express from "express";
import bodyParser from "body-parser";
import epochsRoutes from "./routes/time.js";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use("/time", epochsRoutes);

//default rout === time
app.get("/", (req, res) => res.send("Time Homepage Loading!."));
console.log("[Time Homepage Loading]!");

//metrics route === metric
app.get("/metric", (req, res) => res.send("Metric data table goes here!"));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);