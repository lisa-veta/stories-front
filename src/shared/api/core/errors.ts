export class HttpError extends Error {
  public readonly status?: number;

  public readonly code?: string;

  constructor(
    message: string,
    status?: number,
    code?: string,
  ) {
    super(message);
    this.code = code;
    this.status = status;
    this.name = 'HttpError';
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED');
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends HttpError {
  constructor(message: string = 'Forbidden') {
    super(message, 403, 'FORBIDDEN');
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string = 'Not Found') {
    super(message, 404, 'NOT_FOUND');
    this.name = 'NotFoundError';
  }
}
