"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessException extends Error {
    constructor(message = "Invalid Business Rule", code = "BUSINESS_RULE") {
        super(message);
        this.name = "BusinessException";
        this.code = code;
        this.statusCode = 400;
    }
}
exports.default = BusinessException;
