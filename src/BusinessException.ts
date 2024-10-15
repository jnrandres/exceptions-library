class BusinessException extends Error {
  public statusCode: number;
  public code: string;
  constructor(message: string = "Invalid Business Rule", code: string = "BUSINESS_RULE") {
    super(message);
    this.name = "BusinessException";
    this.code = code;
    this.statusCode = 400;
  }
}

export default BusinessException;
