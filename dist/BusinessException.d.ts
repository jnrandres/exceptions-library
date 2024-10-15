declare class BusinessException extends Error {
    statusCode: number;
    code: string;
    constructor(message?: string, code?: string);
}
export default BusinessException;
