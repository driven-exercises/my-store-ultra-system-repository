import pg from "pg";

const { Pool } = pg;

const configDatabase = {
  connectionString:
    "postgres://bootcamp_role:senha_super_hiper_ultra_secreta_do_role_do_bootcamp@localhost:5432/exercicio_mystoreultrasystem_3a28727e",
};

export const db = new Pool(configDatabase);
