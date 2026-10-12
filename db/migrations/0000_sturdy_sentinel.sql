CREATE TYPE "public"."booking_status" AS ENUM('pending', 'confirmed', 'cancelled', 'completed', 'no_show');--> statement-breakpoint
CREATE TYPE "public"."delivery_mode" AS ENUM('online', 'in_person', 'phone');--> statement-breakpoint
CREATE TABLE "appointment_type" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "appointment_type_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(100) NOT NULL,
	"duration_minutes" integer NOT NULL,
	"buffer_before_minutes" integer DEFAULT 0 NOT NULL,
	"buffer_after_minutes" integer DEFAULT 0 NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "appointment_type_duration_check" CHECK ("appointment_type"."duration_minutes" > 0),
	CONSTRAINT "appointment_type_buffer_before_check" CHECK ("appointment_type"."buffer_before_minutes" >= 0),
	CONSTRAINT "appointment_type_buffer_after_check" CHECK ("appointment_type"."buffer_after_minutes" >= 0)
);
--> statement-breakpoint
CREATE TABLE "availability_exception" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "availability_exception_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"date" date NOT NULL,
	"start_time" time,
	"end_time" time,
	"available" boolean NOT NULL,
	"reason" varchar(255),
	CONSTRAINT "availability_exception_times_check" CHECK (
      ("availability_exception"."start_time" IS NULL AND "availability_exception"."end_time" IS NULL)
      OR
      ("availability_exception"."start_time" IS NOT NULL AND
       "availability_exception"."end_time" IS NOT NULL AND
       "availability_exception"."start_time" < "availability_exception"."end_time")
    )
);
--> statement-breakpoint
CREATE TABLE "availability_rule" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "availability_rule_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"day_of_week" integer NOT NULL,
	"start_time" time NOT NULL,
	"end_time" time NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	CONSTRAINT "availability_rule_day_of_week_check" CHECK ("availability_rule"."day_of_week" BETWEEN 0 AND 6),
	CONSTRAINT "availability_rule_time_check" CHECK ("availability_rule"."start_time" < "availability_rule"."end_time")
);
--> statement-breakpoint
CREATE TABLE "booking" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "booking_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"client_id" integer NOT NULL,
	"appointment_type_id" integer NOT NULL,
	"start_at" timestamp with time zone NOT NULL,
	"end_at" timestamp with time zone NOT NULL,
	"delivery_mode" "delivery_mode" NOT NULL,
	"meeting_link" varchar(500),
	"notes" text,
	"status" "booking_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"cancelled_at" timestamp,
	CONSTRAINT "booking_time_check" CHECK ("booking"."start_at" < "booking"."end_at")
);
--> statement-breakpoint
CREATE TABLE "client" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "client_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"preferred_name" varchar(100),
	"email" varchar(255) NOT NULL,
	"phone_country_code" varchar(10),
	"phone_number" varchar(30),
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "booking" ADD CONSTRAINT "booking_client_id_client_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."client"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "booking" ADD CONSTRAINT "booking_appointment_type_id_appointment_type_id_fk" FOREIGN KEY ("appointment_type_id") REFERENCES "public"."appointment_type"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "booking_client_idx" ON "booking" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "booking_start_at_idx" ON "booking" USING btree ("start_at");--> statement-breakpoint
CREATE INDEX "booking_status_idx" ON "booking" USING btree ("status");