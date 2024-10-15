class BadRequestException extends Error {
  public statusCode: number;
  public code: string;
  constructor(message: string = "Bad Request", code: string = "BAD_REQUEST") {
    super(message);
    this.name = "BadRequestException";
    this.code = code;
    this.statusCode = 400;
  }
}

export default BadRequestException;
