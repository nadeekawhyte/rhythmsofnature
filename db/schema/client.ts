import {
  pgTable,
  integer,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const client = pgTable("client", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  preferredName: varchar("preferred_name", { length: 100 }),

  email: varchar("email", { length: 255 }).notNull(),

  phoneCountryCode: varchar("phone_country_code", { length: 10 }),
  phoneNumber: varchar("phone_number", { length: 30 }),

  notes: text("notes"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"),
});