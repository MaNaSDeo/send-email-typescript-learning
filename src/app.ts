import dotenv from "dotenv";
import "express-async-errors";
import express, { Request, Response } from "express";

// error handler
import notFoundMiddleware from "./Middleware/notFound.middleware";
import errorHandlerMiddleware from "./Middleware/errorHandler.middleware";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Email Project</h1>");
});

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
