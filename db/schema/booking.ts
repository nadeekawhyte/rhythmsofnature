import {
  pgTable,
  pgEnum,
  integer,
  timestamp,
  varchar,
  text,
  check,
  index,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";

import { client } from "./client";
import { appointmentType } from "./appointmentType";

export const deliveryMode = pgEnum("delivery_mode", [
  "online",
  "in_person",
  "phone",
]);

export const bookingStatus = pgEnum("booking_status", [
  "pending",
  "confirmed",
  "cancelled",
  "completed",
  "no_show",
]);

export const booking = pgTable("booking", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  clientId: integer("client_id")
    .notNull()
    .references(() => client.id),

  appointmentTypeId: integer("appointment_type_id")
    .notNull()
    .references(() => appointmentType.id),

  startAt: timestamp("start_at").notNull(),
  endAt: timestamp("end_at").notNull(),

  deliveryMode: deliveryMode("delivery_mode").notNull(),

  meetingLink: varchar("meeting_link", { length: 500 }),
  notes: text("notes"),

  status: bookingStatus("status").default("pending").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"),

  cancelledAt: timestamp("cancelled_at"),
}, (table) => [
  check(
    "booking_time_check",
    sql`${table.startAt} < ${table.endAt}`
  ),
  
  index("booking_client_idx").on(table.clientId),
  index("booking_start_at_idx").on(table.startAt),
  index("booking_status_idx").on(table.status),
]);