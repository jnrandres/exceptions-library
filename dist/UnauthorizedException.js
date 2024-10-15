class UnauthorizedException extends Error {
    constructor(message = "Unauthorized", code = "UNAUTHORIZED") {
        super(message);
        this.name = "UnauthorizedException";
        this.code = code;
        this.statusCode = 401;
    }
}
