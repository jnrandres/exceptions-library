"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundException extends Error {
    constructor(message = "Resource not found", code = "NOT_FOUND") {
        super(message);
        this.name = "NotFoundException";
        this.code = code;
        this.statusCode = 404;
    }
}
exports.default = NotFoundException;
