import { ValidationPipeOptions } from "@nestjs/common";

export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true
  }
}

// The satisfies keyword ensures that this constant remains in this format
export const PAGINATION_DEFAULT_PAGE_SIZE = {
  USER: 10
} as const satisfies Record<string, number>