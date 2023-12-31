import express from "express";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";

// @ts-ignore
const prisma = new PrismaClient();
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (_, res: Response) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/digits", (_, res: Response) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
