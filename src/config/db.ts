import { Continent } from "../entities/continent";
import { Country } from "../entities/country";
import { DataSource } from "typeorm";

export const dataSourceCheckpoint = new DataSource({
  database: "checkpoint_backend.sqlite",
  type: "sqlite",
  entities: [Country, Continent],
  synchronize: true,
  logging: ["error", "query"],
});
