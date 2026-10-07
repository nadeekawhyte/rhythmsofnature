import {
  pgTable,
  integer,
  date,
  time,
  boolean,
  varchar,
  check,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";

export const availabilityException = pgTable("availability_exception", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  date: date("date").notNull(),
  startTime: time("start_time"),
  endTime: time("end_time"),

  available: boolean("available").notNull(),
  reason: varchar("reason", { length: 255 }),
}, (table) => [
  check(
    "availability_exception_times_check",
    sql`
      (${table.startTime} IS NULL AND ${table.endTime} IS NULL)
      OR
      (${table.startTime} IS NOT NULL AND
       ${table.endTime} IS NOT NULL AND
       ${table.startTime} < ${table.endTime})
    `
  ),
]);