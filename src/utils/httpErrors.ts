export abstract class HTTPClientError extends Error {
    readonly statusCode!: number;
    readonly name!: string;

    protected constructor(message: object | string) {
        if (message instanceof Object) {
            super(JSON.stringify(message));
        } else {
            super(message);
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class HTTP500Error extends HTTPClientError {
    readonly statusCode = 500;

    constructor(message: string | object = 'Internal server error') {
        super(message);
    }
}

export class HTTP400Error extends HTTPClientError {
    readonly statusCode = 400;

    constructor(message: string | object = 'Bad Request') {
        super(message);
    }
}

export class HTTP401Error extends HTTPClientError {
    readonly statusCode = 401;

    constructor(message: string | object = '401 Unauthorized') {
        super(message);
    }
}

export class HTTP403Error extends HTTPClientError {
    readonly statusCode = 403;

    constructor(message: string | object = 'Forbidden') {
        super(message);
    }
}

export class HTTP404Error extends HTTPClientError {
    readonly statusCode = 404;

    constructor(message: string | object = 'Not found') {
        super(message);
    }
}

export class HTTP422Error extends HTTPClientError {
    readonly statusCode = 422;

    constructor(message: string | object = 'Unprocessable Entity') {
        super(message);
    }
}
