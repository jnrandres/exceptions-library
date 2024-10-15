class NotFoundException extends Error {
  public statusCode: number;
  public code: string;
  constructor(
    message: string = "Resource not found",
    code: string = "NOT_FOUND"
  ) {
    super(message);
    this.name = "NotFoundException";
    this.code = code;
    this.statusCode = 404;
  }
}

export default NotFoundException;
