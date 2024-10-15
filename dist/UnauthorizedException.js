"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnauthorizedException extends Error {
    constructor(message = "Unauthorized", code = "UNAUTHORIZED") {
        super(message);
        this.name = "UnauthorizedException";
        this.code = code;
        this.statusCode = 401;
    }
}
exports.default = UnauthorizedException;
