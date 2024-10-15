class UnauthorizedException extends Error {
    constructor(message = "Unauthorized", code = "UNAUTHORIZED_ERROR") {
        super(message);
        this.name = "UnauthorizedException";
        this.code = code;
        this.statusCode = 401;
    }
}
