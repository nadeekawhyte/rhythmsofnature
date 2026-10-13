import { config } from "dotenv";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

config({ path: ".env.local" });

export const sql = postgres(process.env.DATABASE_URL!);

export const db = drizzle(sql);