import { DataSource } from "typeorm";

export const dataSourceCheckpoint = new DataSource({
  database: "checkpoint_backend.sqlite",
  type: "sqlite",
  synchronize: true,
  logging: ["error", "query"],
});
