"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BadRequestException extends Error {
    constructor(message = "Bad Request", code = "BAD_REQUEST") {
        super(message);
        this.name = "BadRequestException";
        this.code = code;
        this.statusCode = 400;
    }
}
exports.default = BadRequestException;
