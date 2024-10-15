class UnauthorizedException extends Error {
  public statusCode: number;
  public code: string;
  constructor(
    message: string = "Unauthorized",
    code: string = "UNAUTHORIZED"
  ) {
    super(message);
    this.name = "UnauthorizedException";
    this.code = code;
    this.statusCode = 401;
  }
}