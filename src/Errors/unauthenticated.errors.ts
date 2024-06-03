import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customApi.errors";

interface UnauthenticatedError {
  statusCode: number;
}
class UnauthenticatedError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
