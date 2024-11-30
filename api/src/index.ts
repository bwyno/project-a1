import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./route/index";
import { key } from "./helper/generateCrypto";
import cors from "cors"

dotenv.config();
if (!process.env.JWT_SECRET) {
  key();
}

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use("/api", router);
app.use(express.json())
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
