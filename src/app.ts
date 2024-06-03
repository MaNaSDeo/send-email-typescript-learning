import dotenv from "dotenv";
import "express-async-errors";
import express, { Request, Response } from "express";

import { sendEmail } from "./Controllers/sendEmail.controllers";

// error handler
import notFoundMiddleware from "./Middleware/notFound.middleware";
import errorHandlerMiddleware from "./Middleware/errorHandler.middleware";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Email Project</h1><a href='/send'>Send Email</a>");
});

app.get("/send", sendEmail);

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
