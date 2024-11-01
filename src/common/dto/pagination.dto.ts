import { IsNumber, IsOptional, IsPositive } from "class-validator"
import { IsCardinal } from "../decorators/is-cardinal.decorator"

export class PaginationDto {
  @IsNumber()
  @IsCardinal()
  readonly offset: number

  @IsNumber()
  @IsCardinal()
  readonly limit: number
}

// @IsOptional() is better for validating optional properties than using the "?" behind the property