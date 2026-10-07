import {
  pgTable,
  integer,
  varchar,
  boolean,
  timestamp,
  check,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";

export const appointmentType = pgTable("appointment_type", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  name: varchar("name", { length: 100 }).notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  bufferBeforeMinutes: integer("buffer_before_minutes").default(0).notNull(),
  bufferAfterMinutes: integer("buffer_after_minutes").default(0).notNull(),

  active: boolean("active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => [
  check(
    "appointment_type_duration_check",
    sql`${table.durationMinutes} > 0`
  ),
  check(
    "appointment_type_buffer_before_check",
    sql`${table.bufferBeforeMinutes} >= 0`
  ),
  check(
    "appointment_type_buffer_after_check",
    sql`${table.bufferAfterMinutes} >= 0`
  ),
]);