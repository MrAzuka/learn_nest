import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";

export const DB_INITALIZATION_OPTIONS: TypeOrmModuleOptions = {
  type: "postgres",
  username: "MrAzuka",
  password: "lagosis2hot",
  port: 5432,
  host: "localhost",
  database: "restapi",
  autoLoadEntities: true
}

export const DB_SOURCE_OPTIONS: DataSourceOptions = {
  type: "postgres",
  username: "MrAzuka",
  password: "lagosis2hot",
  port: 5432,
  host: "localhost",
  database: "restapi",
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
}