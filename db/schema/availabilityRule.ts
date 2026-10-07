import {
  pgTable,
  integer,
  time,
  boolean,
  check,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";

export const availabilityRule = pgTable("availability_rule", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  dayOfWeek: integer("day_of_week").notNull(),
  startTime: time("start_time").notNull(),
  endTime: time("end_time").notNull(),

  active: boolean("active").default(true).notNull(),
}, (table) => [
  check(
    "availability_rule_day_of_week_check",
    sql`${table.dayOfWeek} BETWEEN 0 AND 6`
  ),
  check(
    "availability_rule_time_check",
    sql`${table.startTime} < ${table.endTime}`
  ),
]);